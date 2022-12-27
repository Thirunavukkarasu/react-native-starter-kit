import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './src/navigation/AppStack';
import BottomTab from './src/screens/layout/BottomTab';
import Header from './src/screens/layout/Header';

const App: React.FC<any> = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Header />
        <AppStack />
        <BottomTab />
      </NavigationContainer>
    </>
  );
};

export default App;
