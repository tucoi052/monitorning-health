import { useMemo } from 'react';
import { Dimensions, StyleSheet, useWindowDimensions } from 'react-native';

import { fontPixel, scaleH, scaleW } from '@common';
import { createStyleSheet, useThemeStyles } from '@theme';
import { FontDefault } from '@theme/typography';

const boxShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

export const styleSheet = createStyleSheet((theme) => ({
  text: {
    ...theme.textPresets.label,
    color: theme.color.neutral500,
  },
  flex: {
    flex: 1,
    marginTop: 20,
  },
  root: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 15,
    backgroundColor: theme.color.background,
  },
  item: {
    flex: 1,
    width: '100%',
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: theme.color.info200,
  },
  healthIcon: {
    width: '100%',
    height: 150,
  },
}));
