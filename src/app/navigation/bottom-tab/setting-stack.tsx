import {Setting} from '@features/setting';
import {APP_SCREEN, RootStackParamList} from '@navigation/screen-types';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

export const SettingStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen
          name={APP_SCREEN.SETTING}
          component={Setting}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
