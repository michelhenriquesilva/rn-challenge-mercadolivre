import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RouteAuth from './routes/auth';
import AppRoutes from './routes/app';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f1da03" />
      <View style={{flex:1, backgroundColor: '#eee'}}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
};

export default App;
