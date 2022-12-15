import {View, Text, FlatList} from 'react-native';
import React from 'react';

import {useCategoryDetail} from '../../hooks/useCategoryDetail';
import ProductCard from '../../components/ProductCard';

export default function TopSellingList({categoryName, categoryTitle}: any) {
  const {data, isLoading} = useCategoryDetail(categoryName);

  return (
    <View className="p-2">
      <Text className="text-lg font-bold text-gray-800">{categoryTitle}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data?.products || []}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({item}) => <ProductCard item={item} />}
      />
    </View>
  );
}
