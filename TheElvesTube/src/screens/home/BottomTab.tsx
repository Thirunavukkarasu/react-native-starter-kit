import {View, Text, Pressable} from 'react-native';
import React from 'react';
import MtIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const BottomTab = (props: Props) => {
  const navigation = useNavigation();

  return (
    <>
      <View className="flex flex-row justify-around h-16 border-t-[1px] border-gray-300 bg-white">
        <View>
          <Pressable onPress={() => navigation.navigate('home')}>
            <MtIcon name="home" size={25} />
            <Text className="text-xs font-medium text-center">Home</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('shorts')}>
            <MtIcon name="play-arrow" size={25} />
            <Text className="text-xs font-medium text-center">Shorts</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('shorts')}>
            <MtIcon name="add-circle-outline" size={35} />
            <Text className="text-xs font-medium text-center">Add</Text>
          </Pressable>
        </View>
        <View className="content-center">
          <Pressable onPress={() => navigation.navigate('subscription')}>
            <MtIcon name="subscriptions" size={25} />
            <Text className="text-xs font-medium text-center">
              Subscriptions
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('library')}>
            <MtIcon name="video-library" size={25} />
            <Text className="text-xs font-medium text-center">Library</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default BottomTab;
