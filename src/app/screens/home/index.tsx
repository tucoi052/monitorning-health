import React, { memo, useEffect } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';
import isEqual from 'react-fast-compare';
import BleManager, { Peripheral } from 'react-native-ble-manager';
import { useSelector } from 'react-redux';
import { deviceSettingLottie, noDataLottie, searchLottie } from '@assets/lotties';
import { dispatch } from '@common';
import { ListView, TouchableScale } from '@components';
import { Text, View } from '@components/core';
import { Screen } from '@components/screen';
import { handleAndroidPermissionsBle } from '@helper/request-ble';
import { selectDevices } from '@redux-selector/ble';
import { bleActions } from '@redux-slice';
import { useThemeStyles } from '@theme';
import LottieView from 'lottie-react-native';
import { styleSheet } from './styles';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const HomeComponent = () => {
  const { styles, theme } = useThemeStyles(styleSheet);
  const devices = useSelector(selectDevices);

  useEffect(() => {
    startBle();
    const listener = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', (e) =>
      dispatch(bleActions.discoverDevice(e)),
    );

    handleAndroidPermissionsBle();
    return () => {
      console.debug('[app] main component unmounting. Removing listeners...');
      listener.remove();
    };
  }, []);

  useEffect(() => {
    dispatch(bleActions.scan());
  }, []);

  const startBle = () => {
    try {
      BleManager.start({ showAlert: false })
        .then(() => console.debug('BleManager started.'))
        .catch((error) => console.error('BeManager could not be started.', error));
    } catch (error) {
      console.error('unexpected error starting BleManager.', error);
      return;
    }
  };

  const togglePeripheralConnection = (peripheral: Peripheral) => {
    dispatch(bleActions.connectDevice({ peripheral }));
  };

  const _renderItem = ({ item }: { item: Peripheral }) => {
    const backgroundColor = item.connected ? '#069400' : '#fff';
    return (
      <TouchableScale
        onPress={() => togglePeripheralConnection(item)}
        containerStyle={[styles.item, { backgroundColor }]}
      >
        <Text style={styles.peripheralName}>
          {item.name} - {item?.advertising?.localName ?? 'NO LOCAL NAME'}
          {item.connecting && ' - Connecting...'}
        </Text>
        <Text style={styles.rssi}>RSSI: {item.rssi}</Text>
        <Text style={styles.peripheralId}>{item.id}</Text>
      </TouchableScale>
    );
  };

  return (
    <View style={styles.root}>
      <Screen excludeEdges={['top', 'bottom']} bottomInsetColor="transparent" statusBarStyle="dark-content">
        <LottieView source={deviceSettingLottie} autoPlay style={styles.settingIcon} />
        <Text style={styles.header}>Hãy thêm thiết bị để chúng tôi chăm sóc sức khoẻ của bạn</Text>
        <TouchableScale containerStyle={styles.btnSearch} onPress={() => dispatch(bleActions.scan({ reScan: true }))}>
          <LottieView source={searchLottie} autoPlay style={styles.searchIcon} />
          <Text style={styles.txtSearch}>Tìm lại</Text>
        </TouchableScale>
        <ListView
          type="flashlist"
          estimatedItemSize={94}
          data={devices}
          renderItem={_renderItem}
          ItemSeparatorComponent={() => <View style={styles.mt20} />}
          ListFooterComponent={() => <View style={styles.pb50} />}
          ListEmptyComponent={() => (
            <>
              <LottieView source={noDataLottie} autoPlay style={styles.settingIcon} />
              <Text style={styles.txtNoData}>Không tìm thấy thiết bị nào</Text>
            </>
          )}
        />
      </Screen>
    </View>
  );
};

export const Home = memo(HomeComponent, isEqual);
