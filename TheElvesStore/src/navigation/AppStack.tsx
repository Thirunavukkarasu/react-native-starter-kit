import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FaIcon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/Home';
import ProductStack from './ProductStack';
import ProfileScreen from '../screens/MyAccount';
import MyOrders from '../screens/MyOrders';
import ContactUs from '../screens/ContactUs';
import Faqs from '../screens/Faqs';

import CustomDrawerContent from './Menu';
import {Images} from '../constants';
import {useNavigation} from '@react-navigation/native';
import WishList from '../screens/WishList';

const Drawer = createDrawerNavigator();

const profile = {
  avatar: Images.Profile,
  name: 'Rachel Brown',
  type: 'Seller',
  plan: 'Pro',
  rating: 4.8,
};

const LogoTitle = () => {
  const navigation = useNavigation<any>();

  return (
    <View className="flex flex-row items-center w-[100%] justify-between">
      <Text className="text-xl font-medium">The Elves Store</Text>
      <View className="flex flex-row space-x-3 items-center">
        <FaIcon name="search" style={{fontSize: 16}} />
        <FaIcon
          name="heart"
          style={{fontSize: 16}}
          onPress={() => navigation.navigate('wishlist')}
        />
        <FaIcon name="shopping-bag" style={{fontSize: 16}} />
      </View>
    </View>
  );
};

export default function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      initialRouteName="home">
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{headerTitle: props => <LogoTitle />}}
      />
      <Drawer.Screen
        name="productRoot"
        component={ProductStack}
        options={{
          headerShown: false,
          headerLeft: () => <Button title="Back" />,
        }}
      />
      <Drawer.Screen
        name="wishlist"
        component={WishList}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="my-account"
        component={ProfileScreen}
        options={{title: 'My Account'}}
      />
      <Drawer.Screen
        name="my-orders"
        component={MyOrders}
        options={{title: 'My Orders'}}
      />
      <Drawer.Screen
        name="contact-us"
        component={ContactUs}
        options={{title: 'Contact Us'}}
      />
      <Drawer.Screen name="faqs" component={Faqs} options={{title: 'FAQs'}} />
    </Drawer.Navigator>
  );
}
