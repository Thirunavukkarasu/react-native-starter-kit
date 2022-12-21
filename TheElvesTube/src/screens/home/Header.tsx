import {View, Text, Image} from 'react-native';
import React from 'react';
import MtIcon from 'react-native-vector-icons/MaterialIcons';
import MtcIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <View className="flex flex-row bg-white h-12">
        <View className="basis-1/2 flex flex-row">
          <Image
            className="h-16 w-[80px]"
            source={require('../../assets/youtube-logo.webp')}
            resizeMode="cover"
          />
        </View>
        <View className="basis-1/2 flex flex-row justify-around py-2">
          <View>
            <MtIcon name="devices" size={27} />
          </View>
          <View>
            <MtcIcon name="bell-outline" size={27} />
          </View>
          <View>
            <MtIcon name="search" size={27} />
          </View>
          <View>
            <Image
              className="h-8 w-8 rounded-full"
              source={require('../../assets/profile-pic.jpg')}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
