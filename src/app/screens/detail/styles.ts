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
  root: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 15,
    backgroundColor: theme.color.background,
  },
  container: {
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    ...boxShadow,
  },
  itemTitle: {
    ...theme.textPresets.H5,
  },
  itemValue: {
    ...theme.textPresets.H4,
    color: theme.color.info,
    marginTop: 20,
  },
  itemLottie: {
    width: 150,
    height: 150,
  },
  healthIcon: {
    width: '100%',
    height: 170,
  },
}));
