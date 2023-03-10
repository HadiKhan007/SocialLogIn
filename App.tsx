import React, {useEffect} from 'react';
import FbLogIn from './src/FbLogIn';
import {Settings} from 'react-native-fbsdk-next';

const App = () => {
  useEffect(() => {
    Settings.initializeSDK();
    Settings.setAppID('1656142984820808');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <FbLogIn />;
};

export default App;
