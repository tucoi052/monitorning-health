import { StyleSheet } from 'react-native';

import { scaleH, scaleW } from '@common';
import { createStyleSheet } from '@theme';

export const styleSheet = createStyleSheet(
  () => ({
    labelStyle: {
      flex: 1,
      paddingRight: scaleW(5),
      color: '#000',
    },
    container: {
      width: '100%',
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    wrapIcon: {
      minHeight: scaleH(24),
    },
    placeHolder: {
      flex: 1,
      paddingRight: scaleW(5),
    },
    wrapView: {
      // backgroundColor: '#FFFFFF',
      borderRadius: scaleW(3),
      flex: 1,
      width: '100%',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
    },
    wrapViewBottomOpened: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomColor: '#bbb',
    },
    wrapViewTopOpened: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderTopColor: '#bbb',
    },
    dropStyle: {
      backgroundColor: '#FFF',
      position: 'absolute',
      overflow: 'hidden',
      // minHeight: 50,
      maxHeight: scaleH(250),
      paddingHorizontal: scaleW(10),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 2.65,

      elevation: 2,
    },
    dropTopOpened: {
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
    },
    dropBottomOpened: {
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
    },
    wrapPlaceholder: {
      height: scaleH(48),
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#E1E1E1',
      paddingHorizontal: 16,
    },
    modal: {
      justifyContent: undefined,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1.5,
      },
      shadowOpacity: 0.27,
      shadowRadius: 1.65,

      elevation: 2,
    },
    iconLeft: {
      marginRight: scaleW(12),
    },
  }),
);
