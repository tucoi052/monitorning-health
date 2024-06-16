import { StyleSheet } from 'react-native';

import { fontPixel } from '@common';
import { FontDefault } from '@theme/typography';

export const textPresets = StyleSheet.create({
  linkTitle: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(24),
    lineHeight: 32,
    color: '#000000',
  },
  linkSubtitle: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(20),
    lineHeight: 32,
    color: '#000000',
  },
  linkLarge: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(18),
    lineHeight: 34,
    color: '#000000',
  },
  linkMedium: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(16),
    lineHeight: 30,
    color: '#000000',
  },
  linkSmall: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(14),
    lineHeight: 20,
    color: '#000000',
  },
  linkXSmall: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(11),
    lineHeight: 20,
    color: '#000000',
  },
  linkXXSmall: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(9),
    lineHeight: 20,
    color: '#000000',
  },
  textMedium: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(16),
    lineHeight: 30,
    color: '#000000',
  },
  textSmall: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(14),
    lineHeight: 20,
    color: '#000000',
  },
  textXSmall: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(11),
    lineHeight: 20,
    color: '#000000',
  },
  textXXSmall: {
    fontFamily: FontDefault.medium,
    fontSize: fontPixel(9),
    lineHeight: 20,
    color: '#000000',
  },
  default: {},
});

export type TextPresetNames = keyof typeof textPresets;
