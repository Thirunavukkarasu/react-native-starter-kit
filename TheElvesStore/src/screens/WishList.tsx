import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {useCategoryDetail} from '../hooks/useCategoryDetail';

export default function WishList() {
  const navigation = useNavigation<any>();
  const {data, isLoading} = useCategoryDetail('mens-shirts');

  return (
    <View>
      {/* Header */}
      <View className="flex flex-row justify-between items-center p-3 bg-white">
        <FaIcon
          name="arrow-left"
          style={{fontSize: 16}}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text className="text-md font-bold uppercase">WishList</Text>
          <Text>5 Items</Text>
        </View>
        <FaIcon name="shopping-bag" style={{fontSize: 16}} />
      </View>
      <SafeAreaView className="mb-20">
        <FlatList
          data={data.products}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({item}) => (
            <View
              className="bg-white w-44 m-2 space-y-2 rounded-xl"
              style={{
                elevation: 3,
              }}>
              <View className="p-4">
                <Image
                  className="w-[100%] h-32"
                  source={{
                    uri: item.thumbnail,
                  }}
                  resizeMode="contain"
                />
                <Text className="text-md font-bold capitalize text-gray-800">
                  {item.title}
                </Text>
                <Text className="text-md text-gray-400">{item.category}</Text>
                <View className="flex flex-row space-x-3">
                  <Text className="text-md font-bold text-gray-800">
                    ${item.price}
                  </Text>
                  <Text className="text-md font-bold line-through text-gray-400">
                    ${item.price + 100}
                  </Text>
                </View>
                <Text className="text-md text-red-800">
                  Member Savings $100
                </Text>
              </View>
              <View className="absolute right-2 w-8 h-8 bg-gray-200 flex flex-row justify-center items-center rounded-full">
                <FaIcon
                  name="close"
                  style={{fontSize: 16, color: '#aaa'}}
                  onPress={() => navigation.goBack()}
                />
              </View>
              <Pressable
                className="border-t-2 border-gray-400 flex flex-row justify-center items-center p-2"
                onPress={() => navigation.navigate('cart')}>
                <Text className="uppercase text-sky-600 text-md font-semibold">
                  Move To Cart
                </Text>
              </Pressable>
            </View>
          )}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
          }}
          numColumns={2}
        />
      </SafeAreaView>
    </View>
  );
}
