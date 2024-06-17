import { appReducer, authenticationReducer } from '@redux-slice';
import { combineReducers } from '@reduxjs/toolkit';
import { bleReducer } from '../action-slice/ble';
import { healthReducer } from '../action-slice/health';

export const allReducer = combineReducers({
  app: appReducer,
  authentication: authenticationReducer,
  ble: bleReducer,
  health: healthReducer,
});

export type RootState = ReturnType<typeof allReducer>;
