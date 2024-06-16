import {useCallback} from 'react';

import {
  HomeIcon,
  HomeInActiveIcon,
  MessageIcon,
  MessageInActiveIcon,
  SoundIcon,
  SoundInActiveIcon,
  UserIcon,
  UserInActiveIcon,
  VideoCallIcon,
} from '@assets/icons-svg';
import {Box, Button, Spacer, Text} from '@components';
import {APP_SCREEN} from '@navigation/screen-types';
import {useTheme} from '@theme';

const SLICE_OFFSET = 2;

const titleBottom = (route: string) => {
  switch (route) {
    case APP_SCREEN.HOME_STACK:
      return 'Trang chủ';
    case APP_SCREEN.SOUND_STACK:
      return 'Âm thanh';
    case APP_SCREEN.MESSAGE_STACK:
      return 'Chat';
    case APP_SCREEN.SETTING_STACK:
      return 'Hồ sơ';

    default:
      return 'Trang chủ';
  }
};

const IconActive = (route: any) => {
  switch (route.name) {
    case APP_SCREEN.HOME_STACK:
      return <HomeIcon />;
    case APP_SCREEN.SOUND_STACK:
      return <SoundIcon />;
    case APP_SCREEN.MESSAGE_STACK:
      return <MessageIcon />;
    case APP_SCREEN.SETTING_STACK:
      return <UserIcon />;

    default:
      return <HomeIcon />;
  }
};

const IconInActive = (route: any) => {
  switch (route.name) {
    case APP_SCREEN.HOME_STACK:
      return <HomeInActiveIcon />;
    case APP_SCREEN.SOUND_STACK:
      return <SoundInActiveIcon />;
    case APP_SCREEN.MESSAGE_STACK:
      return <MessageInActiveIcon />;
    case APP_SCREEN.SETTING_STACK:
      return <UserInActiveIcon />;

    default:
      return <HomeInActiveIcon />;
  }
};

export const TabBar = (prop: any) => {
  const {state, navigation} = prop;

  const theme = useTheme();

  const onPress = useCallback(
    (routeKey: string, routeName: string, isFocused: boolean) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: routeKey,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(routeName);
      }
    },
    [navigation],
  );

  const onLongPress = useCallback(
    (routeKey: string) => {
      navigation.emit({
        type: 'tabLongPress',
        target: routeKey,
      });
    },
    [navigation],
  );

  const onNavigateLiveCall = useCallback(() => {
    navigation.navigate(APP_SCREEN.LIVE_CALL);
  }, [navigation]);

  return (
    <Box
      h={85}
      pb={10}
      ph={16}
      direction="row"
      borderTopColor="#ECECEC"
      borderTopWidth={0.5}>
      {state.routes.slice(0, SLICE_OFFSET).map((route: any, index: number) => {
        const label = titleBottom(route.name);

        const isFocused = state.index === index;

        return (
          <Button
            key={route.key}
            flex={1}
            alignSelf="center"
            alignItems="center"
            onPress={() => onPress(route.key, route.name, isFocused)}
            onLongPress={() => onLongPress(route.key)}>
            {isFocused ? (
              <IconActive {...route} />
            ) : (
              <IconInActive {...route} />
            )}
            <Spacer height={5} />
            <Text
              fontSize={11}
              fontFamily={isFocused ? 'bold' : 'regular'}
              color={isFocused ? theme.colors.primary : theme.colors.grayFive}>
              {label}
            </Text>
          </Button>
        );
      })}
      <Button
        flex={1}
        activeOpacity={0.7}
        alignItems="center"
        mt={5}
        onPress={onNavigateLiveCall}>
        <VideoCallIcon />
      </Button>
      {state.routes.slice(SLICE_OFFSET).map((route: any, index: number) => {
        const label = titleBottom(route.name);

        const isFocused = state.index === index + SLICE_OFFSET;

        return (
          <Button
            key={route.key}
            flex={1}
            alignSelf="center"
            alignItems="center"
            onPress={() => onPress(route.key, route.name, isFocused)}
            onLongPress={() => onLongPress(route.key)}>
            {isFocused ? (
              <IconActive {...route} />
            ) : (
              <IconInActive {...route} />
            )}
            <Spacer height={5} />
            <Text
              fontSize={11}
              fontFamily={isFocused ? 'bold' : 'regular'}
              color={isFocused ? theme.colors.primary : theme.colors.grayFive}>
              {label}
            </Text>
          </Button>
        );
      })}
    </Box>
  );
};
