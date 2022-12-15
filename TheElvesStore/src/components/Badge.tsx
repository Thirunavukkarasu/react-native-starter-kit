import {View, Text} from 'react-native';
import React from 'react';

export default function Badge({label}: any) {
  return (
    <View className="border-2 border-gray-400 w-12 h-10 p-2 rounded-lg m-1">
      <Text className="text-center">{label}</Text>
    </View>
  );
}
