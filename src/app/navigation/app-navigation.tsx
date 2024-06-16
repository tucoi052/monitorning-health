import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { useSelector } from 'react-redux';

import { dispatch, RXStore } from '@common';
import { hideLoading, ProgressDialog, showLoading, SnackBar } from '@components';
import { ImageTransition } from '@components/light-box/image-transition';
import { PortalHost } from '@gorhom/portal';
import { navigationRef } from '@navigation/navigation-service';
import { RootNavigation } from '@navigation/root-navigator';
import {
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { selectAppConfig } from '@redux-selector/app';
import { appActions } from '@redux-slice';
import { useThemeStyles } from '@theme';
export const AppContainer = () => {
  // state
  const { loadingApp, showDialog } = useSelector(selectAppConfig);
  const { theme } = useThemeStyles();

  // effect
  useEffect(() => {
    dispatch(appActions.startLoadApp());
  }, []);

  useEffect(() => {
    if (showDialog) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [showDialog]);

  // render
  return (
    <NavigationContainer ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.color.background,
        },
      }}>
      <>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        {!loadingApp && (
          <>
            <RootNavigation />
            <ProgressDialog />
            <SnackBar />
            <ImageTransition />
          </>
        )}
        <PortalHost name={'AppModal'} />
        <RXStore />
      </>
    </NavigationContainer>
  );
};
