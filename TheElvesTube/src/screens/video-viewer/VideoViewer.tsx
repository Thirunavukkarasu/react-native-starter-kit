import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

import VideoPlayer from '../../components/VideoPlayer';
import VideoList from '../../components/VideoList';
import {View} from 'react-native';
import VideoDescription from '../../components/VideoDescription';

const fetchVideosList = async (videoId: string) => {
  const uri = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer%2Cstatus&regionCode=IN&id=${videoId}&key=AIzaSyAMIGALjeakgXS-JvOXLfnk6Yj5Q47lJqE`;

  return fetch(uri)
    .then(res => res.json())
    .catch(err => console.log('err : ', err));
};

type Props = {};

const VideoViewer = (props: Props) => {
  const route = useRoute<any>();
  const [videoDetails, setVideoDetails] = useState<any>({});

  useEffect(() => {
    fetchVideosList()
      .then(res => {
        setVideoDetails(res.items);
        console.log('res : ', res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <View className="flex">
        <View className="flex flex-row">
          <VideoPlayer
            videoId={route?.params?.videoId}
            height={300}
            width={400}
            play={true}
          />
        </View>
        <View className="flex flex-row">
          {/* <VideoDescription item={videoDetails} /> */}
          {/* <VideoList videoList={videoList} /> */}
        </View>
      </View>
    </>
  );
};

export default VideoViewer;
