import { SLICE_NAME } from '@config/type';
import { AppState } from '@model/app';
import * as Action from '@redux-action-type/app';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialAppState: AppState = {
  internetState: true,
  token: undefined,
  /**
   * default true to load app
   */
  loadingApp: false,
  showDialog: false,

  theme: 'default',
};

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialAppState,
  reducers: {
    setInternetState: (state, { payload }: PayloadAction<boolean>) => {
      state.internetState = payload;
    },
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    startLoadApp: state => {
      state.loadingApp = true;
    },
    endLoadApp: state => {
      state.loadingApp = false;
    },
    startProcess: state => {
      state.showDialog = true;
    },
    endProcess: state => {
      state.showDialog = false;
    },
    logout: state => {
      state.token = undefined;
    },
  },
});

const getAppConfigText = createAction(Action.GET_CONFIG_TEXT, () => ({
  payload: {},
}));

export const appActions = {
  ...appSlice.actions,
  getAppConfigText,
};

export const appReducer = appSlice.reducer;
