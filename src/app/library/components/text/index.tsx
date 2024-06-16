import React, { useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';

import { useTranslation } from 'react-i18next';

import { fontPixel, propsToStyle } from '@common';
import { Text as ReactNativeText } from '@rn-core'
import { useThemeStyles } from '@theme';
import { FontDefault } from '@theme/typography';

import { textPresets } from './preset';
import { TextProps } from './type';


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export const Text = ({
  t18n,
  text,
  flex,
  color,
  center,
  children,
  fontSize,
  textAlign,
  fontStyle,
  lineHeight,
  fontWeight,
  fontFamily,
  colorTheme,
  t18nOptions,
  textTransform,
  letterSpacing,
  preset = 'default',
  style: styleOverride = {},
  ...rest
}: TextProps) => {
  // state
  const { theme } = useThemeStyles();

  const [t] = useTranslation();

  const i18nText = useMemo(
    () => t18n && t(t18n, t18nOptions),
    [t18n, t18nOptions, t],
  );

  const content = useMemo(
    () => i18nText || text || children,
    [i18nText, text, children],
  );

  const styleComponent = useMemo<StyleProp<TextStyle>>(
    () => [
      [
        textPresets[preset],
        flex === true && styles.flex,
        fontSize !== undefined && { fontSize: fontPixel(fontSize) },
        fontFamily !== undefined && { fontFamily: FontDefault[fontFamily] },
        colorTheme !== undefined && { color: (theme.color[colorTheme] as string) },
        center && { textAlign: 'center' },
        propsToStyle([
          { fontWeight },
          { color },
          { textAlign },
          { textTransform },
          { fontStyle },
          { letterSpacing },
          { lineHeight },
        ]),
      ],
    ],
    [
      preset,
      flex,
      fontSize,
      fontFamily,
      colorTheme,
      theme.color,
      center,
      fontWeight,
      color,
      textAlign,
      textTransform,
      fontStyle,
      letterSpacing,
      lineHeight,
    ],
  );

  // render
  return (
    <ReactNativeText
      allowFontScaling={false}
      {...rest}
      style={[{ color: theme.color.primary }, styleComponent, styleOverride]}>
      {content}
    </ReactNativeText>
  );
};
