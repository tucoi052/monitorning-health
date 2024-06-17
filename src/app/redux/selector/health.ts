import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/all-reducers';

export const selectHeartRate = createSelector(
  (state: RootState) => state.health,
  (health) => health.heartRate,
);

export const selectSpO2 = createSelector(
  (state: RootState) => state.health,
  (health) => health.spO2,
);

export const selectStepWalking = createSelector(
  (state: RootState) => state.health,
  (health) => health.stepWalking,
);

export const selectSystolic = createSelector(
  (state: RootState) => state.health,
  (health) => health.systolic,
);

export const selectDiastolic = createSelector(
  (state: RootState) => state.health,
  (health) => health.diastolic,
);
