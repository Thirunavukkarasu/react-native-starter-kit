import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FaIcon from 'react-native-vector-icons/FontAwesome';

import useAuthStore from '../stores/useAuthStore';

const menuItems = [
  {
    title: 'Topwear',
    route: 'product',
  },
  {
    title: 'Bottomwear',
    route: 'bottomwear',
  },
  {
    title: 'Collections',
    route: 'collections',
  },
  {
    title: 'Accessories',
    route: 'accessories',
  },
  {
    title: 'My Account',
    route: 'my-account',
  },
  {
    title: 'My Orders',
    route: 'my-orders',
  },
  {
    title: 'Contact Us',
    route: 'contact-us',
  },
  {
    title: 'FAQs',
    route: 'faqs',
  },
];

export default function Menu({navigation}: any) {
  const {logout} = useAuthStore();

  return (
    <View className="flex flex-col justify-between items-center h-full">
      <View className="w-full h-30 bg-gray-800 p-4 border-b-2 border-gray-200 space-y-2">
        <Pressable onPress={() => navigation.navigate('home')}>
          <Text className="text-xl font-bold text-white">The Elves Store</Text>
          <View className="flex flex-row space-x-3">
            <Image
              source={require('../../assets/profile.jpg')}
              className="w-12 h-12 rounded-full object-top"
            />
            <View className="space-y-2">
              <View className="flex flex-row items-center space-x-4">
                <Text className="text-white font-normal">Thirunavukkarasu</Text>
                <FaIcon
                  name="arrow-right"
                  style={{color: '#fff', fontSize: 14}}
                />
              </View>
              <Text className="text-orange-400 font-normal border-b-[1px] border-b-orange-400">
                Exclusive Membership
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View className="w-full flex-1 bg-gray-50 flex flex-col justify-between">
        <View className="flex p-4 space-y-4">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('productRoot', {
                screen: 'product',
              })
            }>
            <Text className="text-md p-2">Topwear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('productRoot', {
                screen: 'product',
              })
            }>
            <Text className="text-md p-2">Bottomwear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('productRoot', {
                screen: 'product',
              })
            }>
            <Text className="text-md p-2">Collections</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('productRoot', {
                screen: 'product',
              })
            }>
            <Text className="text-md p-2">Accessories</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('my-account')}>
            <Text className="text-md p-2">My Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('my-orders')}>
            <Text className="text-md p-2">My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('contact-us')}>
            <Text className="text-md p-2">Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('faqs')}>
            <Text className="text-md p-2">FAQs</Text>
          </TouchableOpacity>
        </View>
        <View className="flex h-[5%] px-4">
          <TouchableOpacity onPress={() => logout()}>
            <Text className="text-md">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
