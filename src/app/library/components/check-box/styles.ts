import { StyleSheet } from 'react-native';
import { createStyleSheet } from '@theme';

const DIMENSIONS = { width: 16, height: 16 };

export const checkboxStyleSheet = createStyleSheet(
  ({ color }) => ({
    root: {
      flexDirection: 'row',
      paddingVertical: 4,
      alignSelf: 'flex-start',
    },
    outline: {
      ...DIMENSIONS,
      marginTop: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: color.primary,
      borderRadius: 1,
    },
    fill: {
      width: DIMENSIONS.width - 4,
      height: DIMENSIONS.height - 4,
      backgroundColor: color.primary,
    },
    label: {
      paddingLeft: 8,
    },
  }),
);
