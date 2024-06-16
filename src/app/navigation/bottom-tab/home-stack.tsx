import { Box } from '@components';
import { Agency } from '@features/agency';
import { Home } from 'src/app/screens/home';
import { Idol } from '@features/idol';
import { Menu } from '@features/menu';
import { News } from '@features/news';
import { Posts } from '@features/posts';
import { Revenues } from '@features/revenues';
import { Store } from '@features/store';
import { headerOptions } from '@navigation/config-header';
import { APP_SCREEN, RootStackParamList } from '@navigation/screen-types';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name={APP_SCREEN.HOME}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={APP_SCREEN.REVENUES}
          component={Revenues}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={APP_SCREEN.MENU}
          component={Menu}
          options={headerOptions}
        />
        <Stack.Screen
          name={APP_SCREEN.POSTS}
          component={Posts}
          options={headerOptions}
        />
        <Stack.Screen
          name={APP_SCREEN.IDOL}
          component={Idol}
          options={headerOptions}
        />
        <Stack.Screen
          name={APP_SCREEN.AGENCY}
          component={Agency}
          options={headerOptions}
        />
        <Stack.Screen
          name={APP_SCREEN.NEWS}
          component={News}
          options={headerOptions}
        />
        <Stack.Screen
          name={APP_SCREEN.STORE}
          component={Store}
          options={headerOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
