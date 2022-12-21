import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LibraryScreen from '../screens/Library';
import SubscriptionsScreen from '../screens/Subscriptions';
import ShortsScreen from '../screens/Shorts';
import HomeScreen from '../screens/home/Home';

type Props = {};

const Stack = createNativeStackNavigator();

const AppStack = (props: Props) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="library" component={LibraryScreen} />
        <Stack.Screen name="shorts" component={ShortsScreen} />
        <Stack.Screen name="subscription" component={SubscriptionsScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AppStack;
