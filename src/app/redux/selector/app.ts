import { showLoading } from '@components';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/all-reducers';

export const selectAppConfig = createSelector(
  (state: RootState) => state.app,
  app => ({
    loadingApp: app.loadingApp,
    showDialog: app.showDialog,
  }),
);

export const selectAppToken = createSelector(
  (state: RootState) => state.app,
  app => app.token,
);

export const selectRoot = createSelector(
  (state: RootState) => state,
  state => state,
);
