import BleManager, { BleScanCallbackType, BleScanMatchMode, BleScanMode, Peripheral } from 'react-native-ble-manager';
import { dispatch } from '@common';
import { takeLatestListeners } from '@listener';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { bleActions } from '../action-slice/ble';

const SECONDS_TO_SCAN_FOR = 3;
const SERVICE_UUIDS: string[] = [];
const ALLOW_DUPLICATES = true;

takeLatestListeners(false)({
  actionCreator: bleActions.scan,
  effect: async (action, listenerApi) => {
    await listenerApi.delay(50);

    try {
      BleManager.scan(SERVICE_UUIDS, SECONDS_TO_SCAN_FOR, ALLOW_DUPLICATES, {
        matchMode: BleScanMatchMode.Sticky,
        scanMode: BleScanMode.LowLatency,
        callbackType: BleScanCallbackType.AllMatches,
      })
        .then(() => {
          console.debug('[startScan] scan promise returned successfully.');
        })
        .catch((err: any) => {
          console.error('[startScan] ble scan returned in error', err);
        });
    } catch (error) {
      console.error('[startScan] ble scan error thrown', error);
    }
  },
});

takeLatestListeners(false)({
  actionCreator: bleActions.discoverDevice,
  effect: async (action, listenerApi) => {
    const { body: peripheral } = action.payload;
    await listenerApi.delay(50);

    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    const { devices } = listenerApi.getState().ble;
    const newDevices = devices.map(_d => {
      if (_d.id === peripheral.id) {
        return { ..._d, rssi: peripheral.rssi }
      }
      return _d;
    })
    if (!newDevices.find(e => e?.id === peripheral.id)) {
      newDevices.push(peripheral);
    }
    dispatch(bleActions.setDevices(newDevices));
  },
});

takeLatestListeners(false)({
  actionCreator: bleActions.connectDevice,
  effect: async (action, listenerApi) => {
    const { body: peripheral } = action.payload;
    await listenerApi.delay(50);

    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    const { devices } = listenerApi.getState().ble;
    let newDevices = devices.map(_d => {
      if (_d.id === peripheral.id) {
        return { ..._d, connecting: true }
      }
      return _d;
    });
    dispatch(bleActions.setDevices(newDevices));
    await BleManager.connect(peripheral.id);
    newDevices = devices.map(_d => {
      if (_d.id === peripheral.id) {
        return { ..._d, connecting: false, connected: true }
      }
      return _d;
    });
    await listenerApi.delay(500);
    dispatch(bleActions.setDevices(newDevices));

    const peripheralData = await BleManager.retrieveServices(peripheral.id);

    // before retrieving services, it is often a good idea to let bonding & connection finish properly
    await listenerApi.delay(900);

    navigate(APP_SCREEN.INFO, {
      peripheralData: peripheralData,
      peripheral: peripheral
    });

  },
});
