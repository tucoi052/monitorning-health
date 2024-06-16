import { showLoading } from '@components';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/all-reducers';

export const selectDevices = createSelector(
  (state: RootState) => state.ble,
  ble => ble.devices,
);

export const selectRoot = createSelector(
  (state: RootState) => state,
  state => state,
);
