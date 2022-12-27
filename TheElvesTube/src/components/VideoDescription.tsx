import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  item: any;
};

const VideoDescription = ({item}: Props) => {
  return (
    <>
      <View className="mx-2 my-2 h-20">
        {/* Video title  */}
        <View className="flex flex-row bg-white">
          <Text className="font-mono font-bold text-[15px] text-gray-600 tracking-tight">
            {item?.snippet.title}
          </Text>
        </View>
        {/* Video Title  */}

        {/* Video Description */}
        <View className="flex flex-row justify-start space-x-5">
          <Text className="font-mono font-semibold">
            {item?.snippet?.channelTitle}
          </Text>
          <Text className="font-mono font-semibold">
            {item?.statistics?.viewCount / 1000}K Views
          </Text>
          <Text className="font-mono font-semibold">5 hours ago</Text>
        </View>
        {/* Video Description */}
      </View>
    </>
  );
};

export default VideoDescription;
