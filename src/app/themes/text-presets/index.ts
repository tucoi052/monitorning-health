import { StyleSheet } from 'react-native';

import { fontPixel } from '@common';
import { FontDefault } from '../typography';

const presets = {
  caption: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(12),
  },
  overline: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(10),
  },
  H1: {
    color: '#000000',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: fontPixel(48),
  },
  H2: {
    color: '#000000',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: fontPixel(40),
  },
  H3: {
    color: '#000000',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: fontPixel(36),
  },
  H4: {
    color: '#000000',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: fontPixel(30),
  },
  H5: {
    color: '#000000',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: fontPixel(24),
  },
  subtitle1: {
    color: '#000000',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: fontPixel(20),
  },
  subtitle2: {
    color: '#000000',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: fontPixel(18),
  },
  paragraph1: {
    color: '#000000',
    fontFamily: FontDefault.secondary,
    fontSize: fontPixel(16),
  },
  paragraph2: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(14),
  },
  paragraphBold: {
    color: '#000000',
    fontFamily: FontDefault.primaryBold,
    fontSize: fontPixel(14),
  },
  quotes: {
    color: '#000000',
    fontFamily: FontDefault.secondaryItalic,
    fontSize: fontPixel(18),
  },
  label: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(12),
  },
  placeholder: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(14),
  },
  assistive: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(1248),
  },
  CTAs: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(16),
  },
  CTALinks: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(18),
  },
  CTASmall: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(14),
  },
  extraSmall: {
    color: '#000000',
    fontFamily: FontDefault.primary,
    fontSize: fontPixel(12),
  },
};

export const textPresets = StyleSheet.create(presets);
