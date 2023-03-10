import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const FbLogIn = () => {
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  return (
    <View style={styles.mainContiner}>
      <Text>FbLogIn</Text>
      <TouchableOpacity style={styles.btnStyle} onPress={onFacebookButtonPress}>
        <Text style={styles.textStyle}>Sign in with FB</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FbLogIn;

const styles = StyleSheet.create({
  mainContiner: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    backgroundColor: '#000789',
    padding: 12,
    marginVertical: 15,
    borderRadius: 10,
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
  },
});
