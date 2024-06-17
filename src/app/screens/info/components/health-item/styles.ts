import { createStyleSheet } from '@theme';

const boxShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,

  elevation: 2,
};
export const styleSheet = createStyleSheet((theme) => ({
  item: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#fff',
    ...boxShadow,
  },
  itemTitle: {
    ...theme.textPresets.subtitle2,
    paddingHorizontal: 15,
    textAlign: 'center'
  },
  itemValue: {
    ...theme.textPresets.H5,
    color: theme.color.info,
  },
  itemLottie: {
    width: 50,
    height: 50,
  },
}));
