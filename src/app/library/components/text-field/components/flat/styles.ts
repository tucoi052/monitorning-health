import { StyleSheet } from 'react-native';
import { useThemeStyles } from '@theme';

export const useStyle = () => {
  const { theme } = useThemeStyles();

  return StyleSheet.create({
    container: {
      paddingVertical: 5,
      borderBottomWidth: StyleSheet.hairlineWidth * 2,
      borderColor: 'gray',
      justifyContent: 'center',
    },
    input: {
      color: theme.color.text,
      padding: 0,
      marginTop: 10,
      borderBottomColor: 'transparent',
    },
    text: {
      position: 'absolute',
      alignSelf: 'flex-start',
      zIndex: 2,
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
    },
    flex: {
      flex: 1,
    },
  })
};
