import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { healthLottie } from '@assets/lotties';
import { HealthEnum } from '@common';
import { ListView } from '@components';
import { View } from '@components/core';
import { Screen } from '@components/screen';
import { useThemeStyles } from '@theme';
import LottieView from 'lottie-react-native';
import { HealthItem } from './components';
import { styleSheet } from './styles';

const healthData = Object.values(HealthEnum).filter((key) => typeof key === 'number');

const InfoComponent = () => {
  const { styles, theme } = useThemeStyles(styleSheet);

  return (
    <View style={styles.root}>
      <Screen unsafe bottomInsetColor="transparent" statusBarStyle="dark-content">
        <LottieView source={healthLottie} autoPlay style={styles.healthIcon} />
        <ListView
          style={styles.flex}
          type="flatlist"
          numColumns={2}
          data={healthData}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          ItemSeparatorComponent={() => <View style={{ width: 10, height: 10 }} />}
          renderItem={({ item }) => <HealthItem type={item} />}
        />
      </Screen>
    </View>
  );
};

export const Info = memo(InfoComponent, isEqual);
