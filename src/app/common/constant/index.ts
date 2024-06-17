export const MMKV_KEY = {
  APP_TOKEN: 'APP_TOKEN',
  APP_THEME: 'APP_THEME',
  DEVICE_CONNECTED: 'DEVICE_CONNECTED',
} as const;

export const API_CONFIG = {
  CODE_DEFAULT: -200,
  CODE_SUCCESS: 200,
  ERROR_NETWORK_CODE: -100,
  RESULT_CODE_PUSH_OUT: 401,
  TIME_OUT: 10 * 1000,
  STATUS_TIME_OUT: 'ECONNABORTED',
  CODE_TIME_OUT: 408,
};

export const SERVICE_UUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b';
export const HEART_RATE_UUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8';
export const SP_O2_UUID = 'd7be7b90-2423-4d6e-926d-239bc96bb2fd';
export const STEP_WALKING_UUID = '47524f89-07c8-43b6-bf06-a21c77bfdee8';
export const SYSTOLIC_UUID = 'f13163b4-cc7f-456b-9ea4-5c6d9cec8ee3';
export const DIASTOLIC_UUID = '97f57b70-9465-4c46-a2e2-38b604f76451';

export enum HealthEnum {
  'heartRate',
  'spO2',
  'stepWalking',
  'systolic',
  'diastolic',
}

export const HealthType = {
  heartRate: 'heartRate',
  spO2: 'spO2',
  stepWalking: 'stepWalking',
  systolic: 'systolic',
  diastolic: 'diastolic',
};
