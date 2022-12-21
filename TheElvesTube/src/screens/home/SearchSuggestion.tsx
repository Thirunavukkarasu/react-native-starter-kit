import {View, Text, Pressable, FlatList, Alert} from 'react-native';
import React from 'react';
import MtcIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

const SearchSuggestion = (props: Props) => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'All',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Comedy',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Argentina worldcup title',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: ' worldcup',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d79',
      title: ' Messi GOAT',
    },
  ];

  return (
    <>
      <View className="flex flex-row h-12 my-2 mx-1 divide-x-[0.5px] divide-gray-500">
        <View className="w-12 px-2 py-2">
          <Pressable>
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
                  <View className="bg-zinc-100 rounded-2xl w-max mx-2 my-1 py-2 ">
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
