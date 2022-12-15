import {View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const slides = [
  require('../../../assets/banners/banner.png'),
  require('../../../assets/banners/banner.png'),
  require('../../../assets/banners/banner.png'),
  require('../../../assets/banners/banner.png'),
];

export default function BannerSection() {
  return (
    <View>
      <SliderBox
        images={slides}
        sliderBoxHeight={140}
        dotColor={'#000'}
        inactiveDotColor={'#555'}
        paginationBoxVerticalPadding={10}
        autoplayInterval={6000}
      />
    </View>
  );
}
