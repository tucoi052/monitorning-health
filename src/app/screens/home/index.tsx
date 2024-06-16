import { memo, useCallback, useEffect, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';
import { GeoIcon } from '@assets/icons-svg';
import { scaleH, widthWindow } from '@common';
import { Button, Modal, PrimaryButton } from '@components';
import { Text, View } from '@components/core';
import { Screen } from '@components/screen';
import { useEventCallback } from '@hooks';
import { useThemeStyles } from '@theme';
import { styleSheet } from './styles';



const HomeComponent = () => {
  const { styles, theme } = useThemeStyles(styleSheet);

  return (
    <View style={styles.root}>
      <Screen
        bottomInsetColor="transparent"
        statusBarStyle="dark-content"
        backgroundColor={'transparent'}
      >
        <PrimaryButton text='Tìm kiếm thiết bị' />
      </Screen>
    </View>

  );
};


export const Home = memo(HomeComponent, isEqual);
