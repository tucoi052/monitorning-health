import React from 'react';
import { ImageProps, TouchableWithoutFeedback } from 'react-native';

import { useAnimatedProps, useAnimatedStyle } from 'react-native-reanimated';

import { useTranslation } from '@hooks';
import { AnimatedText, View } from '@rn-core';
import { useThemeStyles } from '@theme';

import { useThrottle } from './hook';
import { outlineButtonStyleSheet } from './styles';
import { ButtonProps } from './type';

export const OutlineButton = ({
  t18n,
  text,
  throttleMs,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  leftIcon,
  rightIcon,
  size = 'normal',
  disabled = false,
  ...rest
}: ButtonProps) => {
  // state
  const {
    styles,
    theme: { color },
  } = useThemeStyles(outlineButtonStyleSheet);

  const t = useTranslation();

  const [
    ,
    handlePress,
    handleLongPress,
    handlePressIn,
    handlePressOut,
    pressed,
  ] = useThrottle({
    throttleMs,
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
  });

  // style
  const textStyle = useAnimatedStyle(() => ({
    // eslint-disable-next-line no-nested-ternary
    color: disabled
      ? color.neutral100
      : pressed.value
        ? color.primary
        : color.primary500,
  }));

  // props
  const iconProps = useAnimatedProps<ImageProps>(() => ({
    // eslint-disable-next-line no-nested-ternary
    tintColor: disabled
      ? color.neutral100
      : pressed.value
        ? color.primary
        : color.primary500,
  }));

  // render
  return (
    <TouchableWithoutFeedback
      {...rest}
      disabled={disabled}
      onLongPress={handleLongPress}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <View
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={[styles[size], styles.buttonColor(disabled)]}>
        {leftIcon ? (
          leftIcon
        ) : null}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <AnimatedText style={[styles[`text_${size}`], textStyle]}>
          {t18n ? t(t18n) : text}
        </AnimatedText>
        {rightIcon ? (
          rightIcon
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};
