/* eslint-disable @typescript-eslint/no-explicit-any */
import { SLICE_NAME } from '@config/type';
import { AuthenticationState } from '@model/authentication';
import * as Action from '@redux-action-type/authentication';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: AuthenticationState = {
  loading: false,
};

const authenticationSlice = createSlice({
  name: SLICE_NAME.AUTHENTICATION,
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
});

const login = createAction(
  Action.LOGIN,
  (
    body?: any,
    onSucceeded?: () => void,
    onFailure?: (msg: string) => void,
  ) => ({
    payload: {
      body,
      onSucceeded,
      onFailure,
    },
  }),
);

const signUp = createAction(
  Action.SIGNUP,
  (
    body?: any,
    onSucceeded?: (response: any) => void,
    onFailure?: (msg: string) => void,
  ) => ({
    payload: {
      body,
      onSucceeded,
      onFailure,
    },
  }),
);

const forgotPassword = createAction(
  Action.FORGOT_PASSWORD,
  (
    body?: any,
    onSucceeded?: () => void,
    onFailure?: (msg: string) => void,
  ) => ({
    payload: {
      body,
      onSucceeded,
      onFailure,
    },
  }),
);

export const authenticationActions = {
  ...authenticationSlice.actions,
  login,
  signUp,
  forgotPassword,
};

export const authenticationReducer = authenticationSlice.reducer;
