/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InstagramLogin from 'react-native-instagram-login';

const InstaLogIn = () => {
  const insRef = useRef();
  const [token, setToken] = useState(null);

  const onClear = () => {};

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => insRef.current.show()}>
        <Text style={{color: 'white', textAlign: 'center'}}>Login now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, {marginTop: 10, backgroundColor: 'green'}]}
        onPress={onClear}>
        <Text style={{color: 'white', textAlign: 'center'}}>Logout</Text>
      </TouchableOpacity>
      <Text style={{margin: 10}}>Token: {token}</Text>
      <InstagramLogin
        ref={insRef}
        appId="your-app-id"
        appSecret="your-app-secret"
        redirectUrl="your-redirect-Url"
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={token => setToken(token)}
        onLoginFailure={data => console.log(data)}
      />
    </View>
  );
};

export default InstaLogIn;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    backgroundColor: 'orange',
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
