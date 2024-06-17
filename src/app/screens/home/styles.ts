import { createStyleSheet } from '@theme';
import { FontDefault } from '@theme/typography';

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
  text: {
    ...theme.textPresets.label,
    color: theme.color.neutral500,
  },
  header: {
    ...theme.textPresets.H5,
    color: theme.color.primary,
    textAlign: 'center',
    paddingBottom: 10,
  },
  root: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 15,
    backgroundColor: theme.color.background,
  },
  item: {
    borderRadius: 20,
    paddingHorizontal: 2,
    ...boxShadow,
  },
  mt20: {
    marginTop: 20,
  },
  pb50: {
    paddingBottom: 50,
  },
  peripheralName: {
    ...theme.textPresets.subtitle2,
    textAlign: 'center',
    padding: 10,
  },
  rssi: {
    ...theme.textPresets.label,
    textAlign: 'center',
    padding: 2,
  },
  peripheralId: {
    ...theme.textPresets.label,
    textAlign: 'center',
    padding: 2,
    paddingBottom: 20,
  },
  settingIcon: {
    width: '100%',
    height: 160,
  },
  btnSearch: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    ...boxShadow,
  },
  searchIcon: {
    width: 27,
    height: 27,
  },
  txtSearch: {
    ...theme.textPresets.label,
    marginLeft: 10,
    fontSize: 16,
  },
  txtNoData: {
    fontSize: 16,
    textAlign: 'center',
  },
}));
