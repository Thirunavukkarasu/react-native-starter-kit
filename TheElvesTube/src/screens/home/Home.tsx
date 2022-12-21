import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

type Props = {};

const Home = (props: Props) => {
  const [videoList, setVideoList] = React.useState<any>([]);

  React.useEffect(() => {
    const fetchVideosList = async () => {
      const uri =
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer%2Cstatus&chart=mostPopular&regionCode=IN&key=AIzaSyAMIGALjeakgXS-JvOXLfnk6Yj5Q47lJqE';

      return fetch(uri)
        .then(res => res.json())
        .catch(err => console.log('err : ', err));
    };

    fetchVideosList().then(res => {
      console.log('length :', res.items.length);
      setVideoList(res.items);
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View className="bg-gray-700">
          {videoList.map((item: any) => {
            return (
              <View className="bg-white">
                {/* Video Thumnail */}
                <View className="flex flex-row w-max h-max" key={item.id}>
                  <Image
                    style={{height: 200, width: 400}}
                    source={{
                      uri: item?.snippet?.thumbnails?.high?.url,
                    }}
                    resizeMode="cover"
                  />
                </View>
                {/* Video Thumnail */}

                {/* Video Description  */}
                <View className="mx-2 my-2 h-20">
                  <View className="flex flex-row bg-white">
                    <Text className="font-mono font-bold text-[15px] text-gray-600 tracking-tight">
                      {item?.snippet.title}
                    </Text>
                  </View>
                  <View className="flex flex-row justify-start space-x-5">
                    <Text className="font-mono font-semibold">
                      {item?.snippet?.channelTitle}
                    </Text>
                    <Text className="font-mono font-semibold">
                      {item?.statistics?.viewCount / 1000}K Views
                    </Text>
                    <Text className="font-mono font-semibold">5 hours ago</Text>
                  </View>
                </View>
                {/* Video Title  */}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
