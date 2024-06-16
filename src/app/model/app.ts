import { ThemeType } from '@theme';

export interface AppState {
  internetState: boolean;
  token: string | undefined;
  loadingApp: boolean;
  showDialog: boolean;
  theme: ThemeType;
}
