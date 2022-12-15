import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CustomIconButton = ({text, image, onPress}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center bg-white rounded-2xl m-2 p-4 space-x-2"
      style={{elevation: 3}}>
      <Text className="text-md font-semibold">{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomIconButton;
