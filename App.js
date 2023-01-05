import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/navigation/Router';
import HomeScreen from './src/screen/home/index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Router />
    </>
  );
};

export default App;
