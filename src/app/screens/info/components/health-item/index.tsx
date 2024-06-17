import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { diastolicLottie, heartLottie, spO2Lottie, systolicLottie, walkLottie } from '@assets/lotties';
import { dispatch, HealthEnum, } from '@common';
import { TouchableScale } from '@components';
import { Text } from '@components/core';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
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

interface HealthItemProps {
  type: HealthEnum;
}

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

const HealthItem = memo(({ type }: HealthItemProps) => {
  const { styles } = useThemeStyles(styleSheet);
  const value = useSelector(getInfoItem(type).selection);

  useEffect(() => {
    dispatch(healthActions.readCharacter(type))
  }, [type]);

  const onPress = () => {
    navigate(APP_SCREEN.DETAIL, { type: type });
  };

  return (
    <TouchableScale containerStyle={styles.item} onPressOut={onPress}>
      <LottieView source={getInfoItem(type).lottie} autoPlay style={styles.itemLottie} renderMode={'SOFTWARE'} />
      <Text style={styles.itemTitle}>{getInfoItem(type).title}</Text>
      <Text style={styles.itemValue}>{value}</Text>
    </TouchableScale>
  );
});

export { HealthItem };
