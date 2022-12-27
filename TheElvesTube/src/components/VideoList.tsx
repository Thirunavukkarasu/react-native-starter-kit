import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import VideoDescription from './VideoDescription';

type Props = {
  videoList: [];
};

const VideoList = ({videoList}: Props) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View className="bg-gray-700">
        {videoList.map((item: any) => {
          return (
            <Pressable
              key={item.id}
              onPress={() => {
                navigation.navigate('video-view', {
                  videoId: item.id,
                });
              }}>
              <View className="bg-white">
                {/* Video Thumnail */}
                <View className="flex flex-row w-max h-max">
                  <Image
                    style={{height: 200, width: 400}}
                    source={{
                      uri: item?.snippet?.thumbnails?.high?.url,
                    }}
                    resizeMode="cover"
                  />
                </View>
                {/* Video Thumnail */}

                <VideoDescription item={item} />
              </View>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default VideoList;
