import React, {useEffect, useState} from 'react';

import SearchSuggestion from './SearchSuggestion';
import VideoList from '../../components/VideoList';

const fetchVideosList = async () => {
  const uri =
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer%2Cstatus&chart=mostPopular&regionCode=IN&key=AIzaSyAMIGALjeakgXS-JvOXLfnk6Yj5Q47lJqE';

  return fetch(uri)
    .then(res => res.json())
    .catch(err => console.log('err : ', err));
};

type Props = {};

const Home = (props: Props) => {
  const [videoList, setVideoList] = useState<any>([]);

  useEffect(() => {
    fetchVideosList().then(res => {
      setVideoList(res.items);
    });
  }, []);

  return (
    <>
      <SearchSuggestion />
      <VideoList videoList={videoList} />
    </>
  );
};

export default Home;
