import { MMKV } from 'react-native-mmkv';

const APP_DISPLAY_NAME = 'APP_Name';

const PRIVATE_KEY_STORAGE = 'PRIVATE_KEY_STORAGE';

export const AppStorage = new MMKV({
  id: `user-${APP_DISPLAY_NAME}-storage`,
  encryptionKey: PRIVATE_KEY_STORAGE,
});


/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export function loadString(key: string) {
  try {
    return AppStorage.getString(key);
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return undefined;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function saveString(key: string, value: string) {
  try {
    AppStorage.set(key, value);

    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export function load<T = Record<string, any>>(key: string): T | null {
  try {
    const almostThere = AppStorage.getString(key);

    return typeof almostThere === 'string' ? JSON.parse(almostThere) : null;
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function save(key: string, value: any) {
  try {
    AppStorage.set(key, JSON.stringify(value));

    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key: string) {
  AppStorage.delete(key);
}

interface Storage {
  getItem(key: string, ...args: Array<any>): any;
  setItem(key: string, value: any, ...args: Array<any>): any;
  removeItem(key: string, ...args: Array<any>): any;
}

export const reduxPersistStorage: Storage = {
  setItem: (key, value) => {
    AppStorage.set(key, value);

    return Promise.resolve(true);
  },
  getItem: key => {
    const value = AppStorage.getString(key);

    return Promise.resolve(value);
  },
  removeItem: key => {
    AppStorage.delete(key);

    return Promise.resolve();
  },
};
