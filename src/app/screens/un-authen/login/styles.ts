import { createStyleSheet } from '@theme';

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

