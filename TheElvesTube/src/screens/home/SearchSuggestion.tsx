import {View, Text, Pressable, FlatList, Alert} from 'react-native';
import React from 'react';
import MtcIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import DrawerNavigation from '../../navigation/HomeDrawerNavigation';

type Props = {
  navigation: any;
};

const SearchSuggestion = (props: Props) => {
  const data = [
    {
      id: '1',
      title: 'All',
    },
    {
      id: '2',
      title: 'Comedy',
    },
    {
      id: '3',
      title: 'Argentina worldcup title',
    },
    {
      id: '4',
      title: ' worldcup',
    },
    {
      id: '5',
      title: ' Messi GOAT',
    },
  ];

  const navigation = useNavigation();

  return (
    <>
      <DrawerNavigation />
      <View className="flex flex-row h-[41px] mx-1 divide-x-[0.5px] divide-gray-500">
        <View className="w-12 px-2 py-2">
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <MtcIcon name="compass-outline" size={25} className="bg-zinc-100" />
          </Pressable>
        </View>
        <View>
          <FlatList
            scrollEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="bg-white"
            data={data}
            renderItem={({item}) => {
              return (
                <>
                  <View className="bg-zinc-100 rounded-2xl w-max mx-2 my-1 py-1 ">
                    <Pressable onPress={() => Alert.alert(item.title)}>
                      <Text className="font-sans font-black font-bold">
                        {item.title}
                      </Text>
                    </Pressable>
                  </View>
                </>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
};

export default SearchSuggestion;
