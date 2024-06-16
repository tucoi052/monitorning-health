import { memo, useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import isEqual from 'react-fast-compare';
import BleManager, { BleScanCallbackType, BleScanMatchMode, BleScanMode, Peripheral, PeripheralInfo } from 'react-native-ble-manager';
import { Button, ListView, Modal, PrimaryButton, TouchableScale } from '@components';
import { Text, View } from '@components/core';
import { Screen } from '@components/screen';
import { navigate } from '@navigation/navigation-service';
import { useThemeStyles } from '@theme';
import { Buffer } from 'buffer'
import { styleSheet } from './styles';

function sleep(ms: number) {
  return new Promise<void>(resolve => { setTimeout(resolve, ms) });
}
const HEART_RATE_UUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8'
const SP_O2_UUID = 'd7be7b90-2423-4d6e-926d-239bc96bb2fd'
const STEP_WALKING_UUID = '47524f89-07c8-43b6-bf06-a21c77bfdee8'
const SYSTOLIC_UUID = 'f13163b4-cc7f-456b-9ea4-5c6d9cec8ee3'
const DIASTOLIC_UUID = '97f57b70-9465-4c46-a2e2-38b604f76451'

const UUID_VALID = [HEART_RATE_UUID, SP_O2_UUID, STEP_WALKING_UUID, SYSTOLIC_UUID, DIASTOLIC_UUID]

const healthData = [
  {
    title: 'Nhịp tim',
    keyValue: 'heartRate'
  },

  {
    title: 'O2 trong máu',
    keyValue: 'spO2'
  },
  {
    title: 'Bước chân',
    keyValue: 'stepWalking'
  },
  {
    title: 'Systolic',
    keyValue: 'systolic'
  },
  {
    title: 'Diastolic',
    keyValue: 'diastolic'
  }
]
interface InfoComponentProps {
  route: {
    params: {
      peripheralData: PeripheralInfo;
      peripheral: Peripheral;
    };
  };
}

const InfoComponent = ({ route }: InfoComponentProps) => {
  const { styles, theme } = useThemeStyles(styleSheet);
  const { peripheralData } = route.params;
  const { peripheral } = route.params;

  const { width } = useWindowDimensions()

  const [healthInfo, setHealthInfo] = useState({
    heartRate: -1,
    spO2: -1,
    stepWalking: -1,
    systolic: -1,
    diastolic: -1,
  })

  useEffect(() => {
    const interval = setInterval(readCharacteristics, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [])

  const retrieveServices = async () => {
    const peripheralInfos: PeripheralInfo[] = [];
    if (peripheral.connected) {
      const newPeripheralInfo = await BleManager.retrieveServices(peripheral.id);
      peripheralInfos.push(newPeripheralInfo);
    }
    return peripheralInfos;
  };

  const readCharacteristics = async () => {
    const services = await retrieveServices();

    for (const peripheralInfo of services) {
      peripheralInfo.characteristics?.forEach(async c => {
        try {
          if (UUID_VALID.includes(c.characteristic)) {
            const value = await BleManager.read(peripheralInfo.id, c.service, c.characteristic);
            const valueString = Buffer.from(value).toString('utf-8');
            setValueItem(c.characteristic, valueString)
          }
        } catch (error) {
          console.log(error, 'error');
        }
      });
    }
  }

  const setValueItem = (characteristic: string, value: any) => {
    console.log(value, 'value');

    switch (characteristic) {
      case HEART_RATE_UUID:
        setHealthInfo(_prev => ({ ..._prev, heartRate: value }))
        break;
      case STEP_WALKING_UUID:
        setHealthInfo(_prev => ({ ..._prev, stepWalking: value }))
        break;
      case SP_O2_UUID:
        setHealthInfo(_prev => ({ ..._prev, spO2: value }))
        break;
      case SYSTOLIC_UUID:
        setHealthInfo(_prev => ({ ..._prev, systolic: value }))
        break;
      case DIASTOLIC_UUID:
        setHealthInfo(_prev => ({ ..._prev, diastolic: value }))
        break;
      default:
        break;
    }
  }

  const HealthItem = (title: string, keyValue: keyof typeof healthInfo) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemValue}>{healthInfo[keyValue]}</Text>
      </View>
    )
  }

  return (
    <View style={styles.root}>
      <Screen
        bottomInsetColor="transparent"
        statusBarStyle="dark-content"
      >
        <ListView
          style={{ flex: 1 }}
          type='flatlist'
          numColumns={2}
          data={healthData}
          columnWrapperStyle={{ paddingHorizontal: 10 }}
          ItemSeparatorComponent={() => <View style={{ width: 10, height: 10 }} />}
          renderItem={({ item }) => HealthItem(item.title, item.keyValue)}
        />
      </Screen>
    </View>

  );
};


export const Info = memo(InfoComponent, isEqual);
