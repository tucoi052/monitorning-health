/* eslint-disable @typescript-eslint/no-explicit-any */
export type ResponseBase<T = any> = {
  code: number;

  data?: T;

  status: boolean;

  header?: any;

  msg?: string | null;
};

export interface ParamsNetwork {
  url: string;
  params?: Record<string, string | number>;
  path?: Record<string, string | number>;
  body?: Record<string, unknown>;
}

export enum SLICE_NAME {
  APP = 'APP_',
  AUTHENTICATION = 'AUTHENTICATION_',
  USER = 'USER_',
  BLE = 'BLE_',
  HEALTH = 'HEALTH_',
  POPULAR = 'POPULAR_',
  SOUND = 'SOUND_',
  PKS = 'PKS_',
  LIVE_SHOW = 'LIVE_SHOW_',
  REVENUES = 'REVENUES_',
  NOTIFICATION = 'NOTIFICATION_',
  SEARCH = 'SEARCH_',
  STORE = 'STORE_',
  LIVE_CALL = 'LIVE_CALL_',
  VOTE = 'VOTE_',
}

export type ValidateMessageObject = {
  keyT: string;
  optionsTx?: Record<string, string | number>;
  options?: Record<string, string | number>;
};
