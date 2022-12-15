import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {get} from 'lodash';

import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';
import {useProducts} from '../hooks/useProducts';

export default function Products() {
  const {data, isLoading} = useProducts();
  const [finalData, setFinalData] = useState<any>([]);
  const route = useRoute();
  const categoryName: any = get(route, 'params.categoryName');

  useEffect(() => {
    if (categoryName) {
      const products = get(data, 'products', []);
      const filteredData = products.filter(
        (item: any) => item.category === categoryName,
      );
      setFinalData(filteredData);
    }
  }, [data, categoryName]);

  return (
    <View>
      <CategoryList />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={categoryName ? finalData : data.products}
          renderItem={({item}) => <ProductCard item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
          }}
          numColumns={2}
        />
      )}
    </View>
  );
}
