import { Peripheral } from 'react-native-ble-manager';
import { HealthEnum } from '@common';
import { SLICE_NAME } from '@config/type';
import { HealthState } from '@model/health';
import * as Action from '@redux-action-type/health';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: HealthState = {
  loading: false,
  heartRate: -1,
  spO2: -1,
  stepWalking: -1,
  systolic: -1,
  diastolic: -1,
};

const healthSlice = createSlice({
  name: SLICE_NAME.HEALTH,
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    setHeartRate: (state, { payload }: PayloadAction<number>) => {
      state.heartRate = payload;
    },
    setSpO2: (state, { payload }: PayloadAction<number>) => {
      state.spO2 = payload;
    },
    setStepWalking: (state, { payload }: PayloadAction<number>) => {
      state.stepWalking = payload;
    },
    setSystolic: (state, { payload }: PayloadAction<number>) => {
      state.systolic = payload;
    },
    setDiastolic: (state, { payload }: PayloadAction<number>) => {
      state.diastolic = payload;
    },
  },
});

const readCharacter = createAction(
  Action.READ,
  (body: HealthEnum, onSucceeded?: () => void, onFailure?: (msg: string) => void) => ({
    payload: {
      body,
      onSucceeded,
      onFailure,
    },
  }),
);

export const healthActions = {
  ...healthSlice.actions,
  readCharacter,
};

export const healthReducer = healthSlice.reducer;
