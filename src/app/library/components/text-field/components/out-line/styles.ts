import { StyleSheet } from 'react-native';

import { useTheme } from '@theme';

export const useStyle = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      paddingVertical: 15,
      borderWidth: StyleSheet.hairlineWidth * 2,
      borderRadius: 5,
      borderColor: 'gray',
      justifyContent: 'center',
    },
    input: {
      color: theme.colors.text,
      padding: 0,
      borderBottomColor: 'transparent',
    },
    text: {
      alignSelf: 'flex-start',
      zIndex: 4,
      left: 5,
    },
    wrapLabel: {
      position: 'absolute',
      alignSelf: 'flex-end',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    wrapPlaceHolder: {
      position: 'absolute',
      alignSelf: 'flex-end',
      paddingLeft: 5,
    },
    flex: {
      flex: 1,
      paddingHorizontal: 5,
    },
  })
};
