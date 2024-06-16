import { appReducer, authenticationReducer } from '@redux-slice';
import { combineReducers } from '@reduxjs/toolkit';
import { bleReducer } from '../action-slice/ble';

export const allReducer = combineReducers({
  app: appReducer,
  authentication: authenticationReducer,
  ble: bleReducer,
});

export type RootState = ReturnType<typeof allReducer>;
