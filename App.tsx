import React, {useEffect} from 'react';
import {Settings} from 'react-native-fbsdk-next';
import InstaLogIn from './src/InstaLogIn';

const App = () => {
  // useEffect(() => {
  //   Settings.initializeSDK();
  //   Settings.setAppID('1656142984820808');
  // }, []);
  return <InstaLogIn />;
};

export default App;
