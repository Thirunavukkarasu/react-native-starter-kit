import {View, Text, ToastAndroid, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function ProductCard({item}: any) {
  const navigation = useNavigation<any>();
  const [isFavourite, setIsFavourite] = useState(false);

  const onPressMarkFavourite = () => {
    setIsFavourite(favourite => !favourite);
    const msg = !isFavourite
      ? 'Product Added to your Wishlist'
      : 'Product Removed from your Wishlist';
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const onPressProductCard = (productDetail: any) => {
    navigation.navigate('productRoot', {
      screen: 'product-detail',
      params: {productId: productDetail?.id},
    });
  };

  return (
    <Pressable
      className="bg-white m-2 shadow-2xl w-44"
      onPress={() => onPressProductCard(item)}>
      <View className="flex">
        <Image
          className="rounded-lg w-[100%] h-32"
          source={{
            uri: item.thumbnail,
          }}
          resizeMode="contain"
        />
        <View className="py-4 px-2 space-y-2">
          <View className="flex flex-row justify-between items-center">
            <Text className="font-medium text-gray-800 w-[80%] capitalize">
              {item.title}
            </Text>
            <FaIcon
              name={isFavourite ? 'heart' : 'heart-o'}
              style={{color: '#000', fontSize: 14}}
              onPress={onPressMarkFavourite}
            />
          </View>
          <Text className="font-medium text-gray-500">{item.category}</Text>
          <View className="flex flex-row space-x-3">
            <Text className="font-medium text-gray-800">${item.price}</Text>
            <Text className="font-medium line-through">${item.price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
