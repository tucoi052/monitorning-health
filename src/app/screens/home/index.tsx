import { memo, useEffect } from 'react';
import { ListRenderItem, NativeEventEmitter, NativeModules } from 'react-native';
import isEqual from 'react-fast-compare';
import BleManager, { Peripheral } from 'react-native-ble-manager';
import { useSelector } from 'react-redux';
import { dispatch } from '@common';
import { ListView, TouchableScale } from '@components';
import { Text, View } from '@components/core';
import { Screen } from '@components/screen';
import { handleAndroidPermissionsBle } from '@helper/request-ble';
import { selectDevices } from '@redux-selector/ble';
import { bleActions } from '@redux-slice';
import { useThemeStyles } from '@theme';
import { styleSheet } from './styles';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);


const HomeComponent = () => {
  const { styles, theme } = useThemeStyles(styleSheet);
  const devices = useSelector(selectDevices)

  useEffect(() => {
    try {
      BleManager.start({ showAlert: false })
        .then(() => console.debug('BleManager started.'))
        .catch((error: any) =>
          console.error('BeManager could not be started.', error),
        );
    } catch (error) {
      console.error('unexpected error starting BleManager.', error);
      return;
    }


    const listener = bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      (e) => dispatch(bleActions.discoverDevice(e)),
    )

    handleAndroidPermissionsBle();
    return () => {
      console.debug('[app] main component unmounting. Removing listeners...');
      listener.remove();
    };
  }, [])

  useEffect(() => {
    dispatch(bleActions.scan())
  }, [])

  const togglePeripheralConnection = async (peripheral: Peripheral) => {
    if (peripheral && peripheral.connected) {
      try {
        await BleManager.disconnect(peripheral.id);
        // eslint-disable-next-line no-empty
      } catch (error) {
      }
    } else {
      dispatch(bleActions.connectDevice(peripheral))
    }
  };

  const _renderItem = ({ item }: { item: Peripheral }) => {
    const backgroundColor = item.connected ? '#069400' : theme.color.info200;
    return (
      <TouchableScale onPress={() => togglePeripheralConnection(item)}>
        <View style={[styles.item, { backgroundColor }]}>
          <Text style={styles.peripheralName}>
            {item.name} - {item?.advertising?.localName}
            {item.connecting && ' - Connecting...'}
          </Text>
          <Text style={styles.rssi}>RSSI: {item.rssi}</Text>
          <Text style={styles.peripheralId}>{item.id}</Text>
        </View>
      </TouchableScale>
    )
  }

  return (
    <View style={styles.root}>
      <Screen
        bottomInsetColor="transparent"
        statusBarStyle="dark-content"
      >
        <Text style={styles.header}>Hãy thêm thiết bị để chúng tôi chăm sóc sức khoẻ của bạn</Text>
        <ListView
          type='flashlist'
          estimatedListSize={{ width: 345, height: 94 }}
          data={devices}
          renderItem={_renderItem}
          style={{ marginTop: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </Screen>
    </View>

  );
};


export const Home = memo(HomeComponent, isEqual);
