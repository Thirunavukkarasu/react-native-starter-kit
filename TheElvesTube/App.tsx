import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './src/navigation/AppStack';
import BottomTab from './src/screens/home/BottomTab';
import Header from './src/screens/home/Header';
import SearchSuggestion from './src/screens/home/SearchSuggestion';

const App: React.FC<any> = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Header />
        <SearchSuggestion />
        <AppStack />
        <BottomTab />
      </NavigationContainer>
    </>
  );
};

export default App;
