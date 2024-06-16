export const FontDefault = {
  primary: 'Roboto-Regular',
  primaryBold: 'Roboto-Medium',
  primarySemiBold: 'Roboto-Bold',
  secondary: 'Roboto-Regular',
  secondaryItalic: 'Roboto-Italic',
} as const;

export type FontFamily = keyof typeof FontDefault;
