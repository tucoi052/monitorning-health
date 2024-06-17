import { ArrowLeftIcon } from '@assets/icons-svg';
import { Button } from '@components';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types';
import { goBack } from './navigation-service';
import { APP_SCREEN } from './screen-types';

const HeaderBack = () => (
  <Button
    hitSlop={{
      top: 15,
      left: 15,
      right: 15,
      bottom: 15,
    }}
    onPress={goBack}
  >
    <ArrowLeftIcon />
  </Button>
);

export const NavigationOptions = (
  {
    route,
  }: {
    route: RouteProp<ParamListBase, string>;
  },
  theme: UnistylesTheme,
): NativeStackNavigationOptions => {
  return {
    title: '',
    animation: 'slide_from_right',
    headerShown: true,
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: theme.color.background,
    },
    headerShadowVisible: false,
    headerLeft: route.name === APP_SCREEN.HOME ? undefined : HeaderBack,
  };
};
