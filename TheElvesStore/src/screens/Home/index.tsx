import React from 'react';
import {ScrollView} from 'react-native';

import BannerSection from './BannerSection';
import CategoryList from '../../components/CategoryList';
import TopSellingList from './TopSellingList';

export default function Home() {
  return (
    <ScrollView>
      <BannerSection />
      <CategoryList />
      <TopSellingList
        categoryName={'mens-shirts'}
        categoryTitle="Top Selling Men Shirts"
      />
      <TopSellingList
        categoryName={'womens-bags'}
        categoryTitle="Top Selling Women Bags"
      />
      <TopSellingList
        categoryName={'smartphones'}
        categoryTitle="Top Selling Smartphones"
      />
      <TopSellingList
        categoryName={'groceries'}
        categoryTitle="Top Selling Groceries"
      />
    </ScrollView>
  );
}
