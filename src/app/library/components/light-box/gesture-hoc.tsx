import React, {memo, useCallback, useEffect} from 'react';
import {BackHandler, useWindowDimensions} from 'react-native';

import isEqual from 'react-fast-compare';
import FastImage from 'react-native-fast-image';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  Extrapolate,
  interpolate,
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  WithTimingConfig,
} from 'react-native-reanimated';

import {sharedTiming, useInterpolate, useVector} from '@animated';
import {Image} from '@components/image';

import {styles} from './styles';
import {GestureHOCProps} from './type';

const timingConfig: WithTimingConfig = {
  duration: 300,
};

export const GestureHOC = memo(
  ({image, source, onClose, backDropOpacity}: GestureHOCProps) => {
    // state
    const {height: heightDevice} = useWindowDimensions();

    const animatedProgress = useSharedValue(0);

    const scale = useSharedValue(1);

    const prevScale = useSharedValue(1);

    const offsetY = useSharedValue(0);

    const zoom = useSharedValue(false);

    const [targetX, targetY] = useVector({
      x: 0,
      y: (heightDevice - image.targetHeight) / 2,
    });

    const [translateX, translateY] = useVector({
      x: 0,
      y: 0,
    });

    const [ctx, cty] = useVector({
      x: 0,
      y: 0,
    });

    const top = useDerivedValue(
      () =>
        translateY.value +
        interpolate(
          animatedProgress.value,
          [0, 1],
          [image.py, targetY.value],
          Extrapolate.CLAMP,
        ),
    );

    const left = useDerivedValue(
      () =>
        translateX.value +
        interpolate(
          animatedProgress.value,
          [0, 1],
          [image.px, targetX.value],
          Extrapolate.CLAMP,
        ),
    );

    const width = useInterpolate(
      animatedProgress,
      [0, 1],
      [image.width, image.targetWidth],
      Extrapolate.CLAMP,
    );

    const height = useInterpolate(
      animatedProgress,
      [0, 1],
      [image.height, image.targetHeight],
      Extrapolate.CLAMP,
    );

    const maxTranslateX = useDerivedValue(
      () => (width.value / 2) * scale.value - width.value / 2,
    );

    const minTranslateX = useDerivedValue(() => -maxTranslateX.value);

    const maxTranslateY = useDerivedValue(
      () => (height.value / 2) * scale.value - height.value / 2,
    );

    const minTranslateY = useDerivedValue(() => -maxTranslateY.value);

    // function
    const onEndAnimatedClose = useCallback(
      (finished?: boolean) => {
        'worklet';
        if (finished) {
          image.imageOpacity.value = 1;

          runOnJS(onClose)();
        }
      },
      [image.imageOpacity, onClose],
    );

    const closeLightBox = useCallback(() => {
      zoom.value = false;

      targetX.value = translateX.value - targetX.value * -1;

      targetY.value = translateY.value - targetY.value * -1;

      translateX.value = 0;

      translateY.value = 0;

      backDropOpacity.value = sharedTiming(0, timingConfig);

      animatedProgress.value = sharedTiming(
        0,
        timingConfig,
        onEndAnimatedClose,
      );
    }, [
      animatedProgress,
      backDropOpacity,
      onEndAnimatedClose,
      targetX,
      targetY,
      translateX,
      translateY,
    ]);

    const panGesture = Gesture.Pan()
      .averageTouches(true)
      .minPointers(1)
      .maxPointers(1)
      .onUpdate(event => {
        const nextTranslateX = ctx.value + event.translationX;

        const nextTranslateY = cty.value + event.translationY;

        offsetY.value = event.translationY;

        translateX.value = nextTranslateX;

        translateY.value = nextTranslateY;

        backDropOpacity.value = interpolate(
          translateY.value,
          [-100, 0, 100],
          [0.6, 1, 0.6],
          Extrapolate.CLAMP,
        );
      })
      .onEnd(() => {
        if (!zoom.value && offsetY.value > 50) {
          runOnJS(closeLightBox)();
        }

        if (zoom.value && offsetY.value > maxTranslateY.value / 1.5) {
          runOnJS(closeLightBox)();
        } else {
          if (translateX.value > maxTranslateX.value) {
            ctx.value = maxTranslateX.value;

            translateX.value = sharedTiming(maxTranslateX.value, timingConfig);
          } else if (translateX.value < minTranslateX.value) {
            ctx.value = minTranslateX.value;

            translateX.value = sharedTiming(minTranslateX.value, timingConfig);
          } else {
            ctx.value = translateX.value;
          }

          if (translateY.value > maxTranslateY.value) {
            cty.value = maxTranslateY.value;

            translateY.value = sharedTiming(maxTranslateY.value, timingConfig);
          } else if (translateY.value < minTranslateY.value) {
            cty.value = minTranslateY.value;

            translateY.value = sharedTiming(minTranslateY.value, timingConfig);
          } else {
            cty.value = translateY.value;
          }

          backDropOpacity.value = sharedTiming(1, timingConfig);
        }
      });

    const pinchGesture = Gesture.Pinch()
      .onStart(() => {
        cancelAnimation(translateX);
        cancelAnimation(translateY);
        cancelAnimation(scale);
        prevScale.value = scale.value;
        zoom.value = true;
      })
      .onUpdate(event => {
        scale.value = prevScale.value * event.scale;
      })
      .onEnd(() => {
        if (scale.value > 2.1) {
          scale.value = sharedTiming(2, timingConfig);
        }

        if (scale.value < 1.1) {
          translateX.value = sharedTiming(0, timingConfig);

          translateY.value = sharedTiming(0, timingConfig);

          scale.value = sharedTiming(1, timingConfig);

          prevScale.value = 0;

          ctx.value = 0;

          cty.value = 0;

          zoom.value = false;
        }
      });

    const composed = Gesture.Simultaneous(pinchGesture, panGesture);

    const onBackButtonPress = useCallback(() => {
      closeLightBox();

      return true;
    }, [closeLightBox]);

    // effect
    useEffect(() => {
      runOnUI(() => {
        'worklet';
        image.imageOpacity.value = 0;

        animatedProgress.value = sharedTiming(1, timingConfig);

        backDropOpacity.value = sharedTiming(1, timingConfig);
      })();
    }, []);

    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', onBackButtonPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackButtonPress);
    }, []);

    // reanimated style
    const imageStyle = useAnimatedStyle(() => ({
      left: left.value,
      top: top.value,
      width: width.value,
      height: height.value,
      transform: [{scale: scale.value}],
    }));

    // render
    return (
      <GestureDetector gesture={composed}>
        <Animated.View style={[imageStyle]}>
          <Image style={[styles.img]} resizeMode={'cover'} source={source} />
        </Animated.View>
      </GestureDetector>
    );
  },
  isEqual,
);
