import React, { useEffect } from 'react';

import BootSplash from 'react-native-bootsplash';
import { useSelector } from 'react-redux';

import { APP_SCREEN, RootStackParamList } from '@navigation/screen-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { selectAppToken } from '@redux-selector/app';
import { Home } from '@screens/home';
import { Info } from '@screens/info';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const token = useSelector(selectAppToken);

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     BootSplash.hide({fade: true});
  //   }, 1000);

  //   return () => clearTimeout(id);
  // }, []);

  // render
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name={APP_SCREEN.HOME} component={Home} />
        <RootStack.Screen name={APP_SCREEN.INFO} component={Info} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
