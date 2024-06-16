import React, { useState } from 'react';
import {
  StatusBar,
} from 'react-native';
import { UnistylesRuntime } from 'react-native-unistyles';
import { Screen } from '@components/screen';
import { View } from '@rn-core';
import { useThemeStyles } from '@theme';
import { useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { styleSheet } from './styles';

const wait = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

export const Login = () => {
  const { styles, theme } = useThemeStyles(styleSheet);

  // func
  const updateStatusBar = (prevType: string) => {
    StatusBar.setBarStyle(
      prevType !== 'dark' ? 'light-content' : 'dark-content',
    );
  };

  const handleChangeTheme = async () => {
    UnistylesRuntime.setTheme(
      UnistylesRuntime.themeName !== 'dark' ? 'dark' : 'light',
    );

    await wait(200);
    updateStatusBar(theme.type)
  };

  // render
  return (
    <View style={styles.root}>
      <Screen
        bottomInsetColor="transparent"
        scroll
        statusBarStyle="dark-content"
        style={{ paddingVertical: 0, paddingHorizontal: 10, flex: 1 }}
        backgroundColor={'transparent'}>

      </Screen>
    </View>
  );
};
