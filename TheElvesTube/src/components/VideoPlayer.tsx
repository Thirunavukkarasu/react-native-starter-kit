import {View} from 'react-native';
import React from 'react';

import YoutubePlayer from 'react-native-youtube-iframe';

type Props = {
  videoId: string;
  height: number;
  width: number;
  play: boolean;
};

const VideoPlayer = ({videoId, height, play, width}: Props) => {
  return (
    <View>
      <YoutubePlayer
        height={height}
        width={width}
        play={play}
        videoId={videoId}
      />
    </View>
  );
};

export default VideoPlayer;
