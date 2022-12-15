import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import {get} from 'lodash';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SliderBox} from 'react-native-image-slider-box';

import Badge from '../../components/Badge';
import {useProductDetail} from '../../hooks/useProductDetail';
import TopSellingSection from '../Home/TopSellingList';

export default function ProductDetail() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const productId: any = get(route, 'params.productId');
  const {data, isLoading} = useProductDetail(productId);

  return (
    <View className="flex flex-1">
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {/*Product Detail Header Section */}
          <View className="bg-white flex flex-row justify-between p-4">
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <FaIcon
                name="arrow-circle-left"
                style={{color: '#000', fontSize: 30}}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('cart')}>
              <FaIcon
                name="shopping-bag"
                style={{color: '#dd3333', fontSize: 30}}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {/* Product Image Section */}
            <View>
              <SliderBox
                images={data.images || []}
                sliderBoxHeight={300}
                dotColor={'#000'}
                inactiveDotColor={'#555'}
                paginationBoxVerticalPadding={10}
                autoplayInterval={6000}
                resizeMode="contain"
              />
            </View>
            {/* Product Header Section */}
            <View className="bg-white p-4">
              <View className="flex flex-row justify-between">
                <Text className="text-md font-bold">{data.title}</Text>
                <View className="flex flex-row items-center space-x-1">
                  <FaIcon
                    name="share-alt"
                    style={{color: '#000', fontSize: 14}}
                  />
                  <Text className="text-gray-600 underline">Share</Text>
                </View>
              </View>
              <Text className="text-md text-gray-500 capitalize">
                {data.category}
              </Text>
              <View className="flex flex-row space-x-3">
                <Text className="text-md font-medium">${data.price}</Text>
                <Text className="text-md line-through">
                  ${data.price + 100}
                </Text>
                <Text className="text-md text-red-400">Member Savings $20</Text>
              </View>
              <View className="flex flex-row justify-end">
                <Pressable>
                  <Text className="text-sky-600 underline">Notify Me</Text>
                </Pressable>
              </View>
            </View>
            {/* Product Description Section */}
            <View className="bg-white p-4 border-t-gray-300 border-t-2 space-y-3">
              <Text className="font-bold">Product Description</Text>
              <Text>{data.description}</Text>
            </View>
            {/* Select Size Section */}
            <View className="bg-white mt-4 space-y-2 p-4">
              <View className="flex flex-row justify-between">
                <Text className="text-md font-bold">Please select a size:</Text>
                <Text className="text-sky-600 underline">Size Chart</Text>
              </View>
              <View className="flex flex-row flex-wrap">
                <Badge label={'XS'} />
                <Badge label={'S'} />
                <Badge label={'M'} />
                <Badge label={'L'} />
                <Badge label={'XL'} />
                <Badge label={'XXL'} />
              </View>
            </View>
            {/* Product Details Section */}
            <View className="bg-white mt-4 p-4 space-y-3">
              <Text className="font-bold">Product Details</Text>
              <View>
                <Text className="font-bold">Material & Care</Text>
                <Text>100% Cotton</Text>
                <Text>Machine Wash</Text>
              </View>
              <View className="flex flex-row space-x-1">
                <Text className="font-bold">Country Of Origin:</Text>
                <Text>India(and proud)</Text>
              </View>
              <View>
                <Text className="font-bold">Manfacture & Sold By:</Text>
                <Text>The Elves Store Pvt Ltd.</Text>
                <Text>54, Rajaji Road</Text>
                <Text>Bagalur Cross</Text>
                <Text>Yelahanka</Text>
                <Text>Bengaluru</Text>
                <Text className="text-blue-800 underline">
                  email@theelvesstore.com
                </Text>
              </View>
            </View>
            {/* Artist Details Section */}
            <View className="bg-white p-4 border-t-gray-300 border-t-2 space-y-3">
              <Text className="font-bold">Artist Details</Text>
              <Text>
                The Elves Store was born out of a simple idea - love what you do
                and follow your soul! Thus, our goal is to give everyone
                something they'll love, something they can use to express
                themselves, and, simply put, something to put a smile on their
                face. So, whether it's superheroes like Superman, TV shows like
                F.R.I.E.N.D.S, pop culture, music, sports, or quirky, funny
                stuff you're looking for, we have something for everyone.
              </Text>
              <Text>
                The Elves Store Originals is our exclusive range of funny,
                funky, trendy and stylish designs. Designed by our kick-ass team
                of in-house designers are some cool and quirky designs that help
                you speak your vibe.
              </Text>
            </View>
            {/* Similar Products Section */}
            <TopSellingSection
              categoryName={data.category}
              categoryTitle={'Similar Products'}
            />
          </ScrollView>
          {/* Action Buttons Section */}
          <View className="bg-white border-[1px] border-t-gray-200">
            <View className="flex flex-row mx-auto my-4">
              <View className="mr-2 bg-red-500 px-6 py-3 flex flex-row items-center space-x-2">
                <FaIcon
                  name="shopping-bag"
                  style={{color: '#fff', fontSize: 14}}
                />
                <Text className="text-white font-medium uppercase text-center">
                  Add To Cart
                </Text>
              </View>
              <View className="border-sky-300 border-[2px] px-6 py-3 flex flex-row items-center space-x-2">
                <FaIcon
                  name="heart-o"
                  style={{color: '#00bbdd', fontSize: 14}}
                />
                <Text className="text-sky-400 font-medium uppercase text-center">
                  Add To Wishlist
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
