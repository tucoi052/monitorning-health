import { Peripheral } from 'react-native-ble-manager';
import { SLICE_NAME } from '@config/type';
import { BleState } from '@model/ble';
import * as Action from '@redux-action-type/ble';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BleState = {
  loading: false,
  devices: [],
};

const bleSlice = createSlice({
  name: SLICE_NAME.BLE,
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    setDevices: (state, { payload }: PayloadAction<Peripheral[]>) => {
      state.devices = payload;
    },
  },
});

const scan = createAction(Action.SCAN, (body?: { reScan?: boolean }, onSucceeded?: () => void, onFailure?: (msg: string) => void) => ({
  payload: {
    body,
    onSucceeded,
    onFailure,
  },
}));

const discoverDevice = createAction(
  Action.DISCOVER_DEVICE,
  (body?: any, onSucceeded?: () => void, onFailure?: (msg: string) => void) => ({
    payload: {
      body,
      onSucceeded,
      onFailure,
    },
  }),
);

const connectDevice = createAction(
  Action.CONNECT_DEVICE,
  (
    body: { peripheral: Peripheral; nonDelay?: boolean },
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

export const bleActions = {
  ...bleSlice.actions,
  scan,
  discoverDevice,
  connectDevice,
};

export const bleReducer = bleSlice.reducer;
