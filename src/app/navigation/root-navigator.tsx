import React, { useEffect } from 'react';

import { Peripheral } from 'react-native-ble-manager';
import BootSplash from 'react-native-bootsplash';
import { useSelector } from 'react-redux';

import { dispatch, MMKV_KEY } from '@common';
import { APP_SCREEN, RootStackParamList } from '@navigation/screen-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { selectAppToken } from '@redux-selector/app';
import { bleActions } from '@redux-slice';
import { Detail } from '@screens/detail';
import { Home } from '@screens/home';
import { Info } from '@screens/info';
import { useThemeStyles } from '@theme';
import { load } from '@utils/storage';
import { NavigationOptions } from './config-header';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const token = useSelector(selectAppToken);
  const { theme } = useThemeStyles();

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     BootSplash.hide({fade: true});
  //   }, 1000);

  //   return () => clearTimeout(id);
  // }, []);

  useEffect(() => {
    const peripheral = load<Peripheral>(MMKV_KEY.DEVICE_CONNECTED);
    console.log(peripheral?.id, 'peripheral');

    if (peripheral) {
      dispatch(bleActions.connectDevice({ peripheral, nonDelay: true }));
    }
  }, []);

  // render
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={(options) => NavigationOptions(options, theme)}>
        <RootStack.Screen name={APP_SCREEN.HOME} component={Home} />
        <RootStack.Screen name={APP_SCREEN.INFO} component={Info} />
        <RootStack.Screen name={APP_SCREEN.DETAIL} component={Detail} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
