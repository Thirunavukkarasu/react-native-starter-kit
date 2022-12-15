import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList} from 'react-native';

import CustomIconButton from './CustomIconButton';
import {useCategory} from '../hooks/useCategory';

export default function CategoryList() {
  const {isLoading, data} = useCategory();
  const navigation = useNavigation<any>();

  return (
    <View className="p-4 mt-2">
      <Text className="text-lg font-bold text-gray-800">Categories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={(item, idx) => `${item}-${idx}`}
        renderItem={({item, idx}: any) => (
          <View key={idx}>
            <CustomIconButton
              key={idx}
              text={item}
              image={require('../../assets/icons/garments.png')}
              onPress={() => {
                navigation.navigate('productRoot', {
                  screen: 'product',
                  params: {
                    categoryName: item,
                  },
                });
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
