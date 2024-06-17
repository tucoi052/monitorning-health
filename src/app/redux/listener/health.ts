import BleManager, { Peripheral } from 'react-native-ble-manager';
import {
  DIASTOLIC_UUID,
  dispatch,
  HealthEnum,
  HEART_RATE_UUID,
  MMKV_KEY,
  SERVICE_UUID,
  SP_O2_UUID,
  STEP_WALKING_UUID,
  SYSTOLIC_UUID,
} from '@common';
import { takeEveryListener, takeLatestListeners } from '@listener';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { load, save } from '@utils/storage';
import { Buffer } from 'buffer';
import { healthActions } from '../action-slice/health';

const readValue = async (peripheralId: string, characteristic: string) => {
  const value = await BleManager.read(peripheralId, SERVICE_UUID, characteristic);
  console.log(Buffer.from(value).toString('utf-8'), 'valueee');

  return Buffer.from(value).toString('utf-8');
};

takeEveryListener(false)({
  actionCreator: healthActions.readCharacter,
  effect: async (action, listenerApi) => {
    const { body } = action.payload;
    const peripheral = load<Peripheral>(MMKV_KEY.DEVICE_CONNECTED);
    if (peripheral) {
      try {
        switch (body) {
          case HealthEnum.heartRate: {
            const value = await readValue(peripheral?.id, HEART_RATE_UUID);
            dispatch(healthActions.setHeartRate(Number(value)));
            break;
          }
          case HealthEnum.spO2: {
            const value = await readValue(peripheral?.id, SP_O2_UUID);
            dispatch(healthActions.setSpO2(Number(value)));
            break;
          }
          case HealthEnum.stepWalking: {
            const value = await readValue(peripheral?.id, STEP_WALKING_UUID);
            dispatch(healthActions.setStepWalking(Number(value)));
            break;
          }
          case HealthEnum.systolic: {
            const value = await readValue(peripheral?.id, SYSTOLIC_UUID);
            dispatch(healthActions.setSystolic(Number(value)));
            break;
          }
          case HealthEnum.diastolic: {
            const value = await readValue(peripheral?.id, DIASTOLIC_UUID);
            dispatch(healthActions.setDiastolic(Number(value)));
            break;
          }
          default:
            break;
        }
      } catch (error) {
        console.error('[startScan] ble scan error thrown', error);
      }
    }
  },
});
