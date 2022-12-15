import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import 'react-native-gesture-handler';

import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import useAuthStore from './src/stores/useAuthStore';

const queryClient = new QueryClient();

export default function App() {
  const {userToken} = useAuthStore();

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          {userToken ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
