import React, { memo, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { useSelector } from 'react-redux';
import { diastolicLottie, healthLottie, heartLottie, spO2Lottie, systolicLottie, walkLottie } from '@assets/lotties';
import { dispatch, HealthEnum } from '@common';
import { Text, View } from '@components/core';
import { Screen } from '@components/screen';
import { useRoute } from '@react-navigation/native';
import {
  selectDiastolic,
  selectHeartRate,
  selectSpO2,
  selectStepWalking,
  selectSystolic,
} from '@redux-selector/health';
import { healthActions } from '@redux-slice';
import { useThemeStyles } from '@theme';
import LottieView from 'lottie-react-native';
import { styleSheet } from './styles';

const getInfoItem = (type: HealthEnum) => {
  switch (type) {
    case HealthEnum.heartRate:
      return {
        title: 'Nhịp tim',
        selection: selectHeartRate,
        lottie: heartLottie,
      };
    case HealthEnum.spO2:
      return {
        title: 'Nồng độ Oxi trong máu',
        selection: selectSpO2,
        lottie: spO2Lottie,
      };
    case HealthEnum.stepWalking:
      return {
        title: 'Bước chân',
        selection: selectStepWalking,
        lottie: walkLottie,
      };
    case HealthEnum.systolic:
      return {
        title: 'Systolic',
        selection: selectSystolic,
        lottie: systolicLottie,
      };
    case HealthEnum.diastolic:
      return {
        title: 'Diastolic',
        selection: selectDiastolic,
        lottie: diastolicLottie,
      };
    default:
      return {
        title: 'Nhịp tim',
        selection: selectHeartRate,
        lottie: heartLottie,
      };
  }
};

const DetailComponent = () => {
  const { styles } = useThemeStyles(styleSheet);
  const route = useRoute();
  const { type }: any = route.params;
  const value = useSelector(getInfoItem(type).selection);

  useEffect(() => {
    const interval = setInterval(() => dispatch(healthActions.readCharacter(type)), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.root}>
      <Screen unsafe bottomInsetColor="transparent" statusBarStyle="dark-content">
        <LottieView source={healthLottie} autoPlay style={styles.healthIcon} />
        <View style={styles.container}>
          <LottieView source={getInfoItem(type).lottie} autoPlay style={styles.itemLottie} />
          <Text style={styles.itemTitle}>{getInfoItem(type).title}</Text>
          <Text style={styles.itemValue}>{value}</Text>
        </View>
      </Screen>
    </View>
  );
};

export const Detail = memo(DetailComponent, isEqual);
