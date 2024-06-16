import React, { ReactNode, Suspense } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider as RNKeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { PortalProvider } from '@gorhom/portal';
import { AppContainer } from '@navigation/app-navigation';
import { store } from '@store/store';
import I18n from '@utils/i18n/i18n';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const KeyboardProvider = ({ children }: { children?: ReactNode }) => {
  // render
  return (
    <>
      <RNKeyboardProvider statusBarTranslucent navigationBarTranslucent>
        {children}
      </RNKeyboardProvider>
    </>
  );
};

export const MyApp = () => {
  // render
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'transparent'} />
      <KeyboardProvider>
        <Provider store={store}>
          <I18nextProvider i18n={I18n}>
            <Suspense fallback={null}>
              <PortalProvider>
                <GestureHandlerRootView style={styles.root}>
                  <AppContainer />
                </GestureHandlerRootView>
              </PortalProvider>
            </Suspense>
          </I18nextProvider>
        </Provider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
};
