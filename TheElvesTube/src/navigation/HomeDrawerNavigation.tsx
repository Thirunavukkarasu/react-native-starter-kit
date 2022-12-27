import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/home/Home';
import {Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

type Props = {};

function test() {
  return (
    <View>
      <Text>Yes</Text>
    </View>
  );
}

const HomeDrawerNavigation = (props: Props) => {
  return (
    <>
      <Drawer.Navigator initialRouteName="trending">
        <Drawer.Screen name="trending" component={test} />
        <Drawer.Screen name="shopping" component={test} />
        <Drawer.Screen name="Music" component={test} />
      </Drawer.Navigator>
    </>
  );
};

export default HomeDrawerNavigation;
