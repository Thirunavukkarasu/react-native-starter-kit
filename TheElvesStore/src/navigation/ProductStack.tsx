import React from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import FaIcon from 'react-native-vector-icons/FontAwesome';

import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="product">
      <Stack.Screen
        name="product"
        component={Products}
        options={{
          title: 'Products',
          headerLeft: () => (
            <FaIcon
              name="arrow-left"
              style={{fontSize: 20, marginRight: 50}}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="product-detail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
