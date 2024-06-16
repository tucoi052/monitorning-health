import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { useAnimatedStyle } from 'react-native-reanimated';

import { useTranslation } from '@hooks';
import { AnimatedView, Text } from '@rn-core';
import { Colors, useThemeStyles } from '@theme';

import { useThrottle } from './hook';
import { primaryButtonStyleSheet } from './styles';
import { ButtonProps } from './type';

export const PrimaryButton = ({
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
  } = useThemeStyles(primaryButtonStyleSheet);

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

  // func
  const iconColor: Colors = disabled ? 'neutral200' : 'neutral50';

  // style
  const containerStyle = useAnimatedStyle(() => ({
    // eslint-disable-next-line no-nested-ternary
    backgroundColor: disabled
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
      <AnimatedView
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={[styles[size], containerStyle]}>
        {leftIcon ? leftIcon : null}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Text style={[styles[`text_${size}`], styles.textColor(disabled)]}>
          {t18n ? t(t18n) : text}
        </Text>
        {rightIcon ? rightIcon : null}
      </AnimatedView>
    </TouchableWithoutFeedback>
  );
};
