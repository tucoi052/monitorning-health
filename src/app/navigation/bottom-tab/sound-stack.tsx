import {Sound} from '@features/sound';
import {APP_SCREEN, RootStackParamList} from '@navigation/screen-types';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

export const SoundStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Group
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name={APP_SCREEN.SOUND}
          component={Sound}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
