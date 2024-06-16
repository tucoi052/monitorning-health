import { StyleSheet } from 'react-native';
import { fontPixel, scaleH } from '@common';
import { useTheme } from '@theme';

export const useStyle = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      height: scaleH(48),
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2,
    },
    textInput: {
      flex: 1,
      height: scaleH(52),
      color: theme.colors.text,
      fontSize: fontPixel(12),
    },
    errorText: {
      color: theme.colors.error,
      fontSize: fontPixel(12),
      paddingTop: scaleH(5),
    },
    iconRight: {
      paddingHorizontal: scaleH(12),
      color: theme.colors.text,
    },
  })
};
