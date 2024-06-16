import { useMemo } from 'react';
import { Dimensions, StyleSheet, useWindowDimensions } from 'react-native';

import { fontPixel, scaleH, scaleW } from '@common';
import { createStyleSheet, useThemeStyles } from '@theme';
import { FontDefault } from '@theme/typography';

export const styleSheet = createStyleSheet(theme => ({
  text: {
    ...theme.textPresets.label,
    color: theme.color.neutral500,
  },
  root: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 15,
    backgroundColor: theme.color.background,
  },
}));

