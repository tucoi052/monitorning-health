import {APP_SCREEN} from '@navigation/screen-types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeStackNavigation} from './home-stack';
import {MessageStackNavigation} from './message-stack';
import {SettingStackNavigation} from './setting-stack';
import {SoundStackNavigation} from './sound-stack';
import {TabBar} from './tab-bar';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={APP_SCREEN.HOME_STACK}
        component={HomeStackNavigation}
      />
      <Tab.Screen
        name={APP_SCREEN.SOUND_STACK}
        component={SoundStackNavigation}
      />
      <Tab.Screen
        name={APP_SCREEN.MESSAGE_STACK}
        component={MessageStackNavigation}
      />
      <Tab.Screen
        name={APP_SCREEN.SETTING_STACK}
        component={SettingStackNavigation}
      />
    </Tab.Navigator>
  );
};
