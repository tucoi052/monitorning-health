import {Conversation} from '@features/conversation';
import {MessageDetails} from '@features/mesageDetails';
import {SearchConversation} from '@features/search-conversation';
import {headerOptions} from '@navigation/config-header';
import {APP_SCREEN, RootStackParamList} from '@navigation/screen-types';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

export const MessageStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name={APP_SCREEN.MESSAGE}
          component={Conversation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={APP_SCREEN.MESSAGE_DETAILS}
          component={MessageDetails}
          options={headerOptions}
        />
        <Stack.Screen
          name={APP_SCREEN.SEARCH_CONVERSATION}
          component={SearchConversation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
