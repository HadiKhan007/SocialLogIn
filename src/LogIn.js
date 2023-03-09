import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  GoogleSignin.configure({
    webClientId:
      '242699434873-iejt9ouddeh3g5j9k7hnld8v4b396da0.apps.googleusercontent.com',
  });
  const Googlebtn = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
    const res = await auth().signInWithCredential(googleCredential);
  };
  const handleLogin = async () => {
    auth()
      .signInWithEmailAndPassword(email.toLowerCase(), pass)
      .then(() => Alert.alert('Done'))
      .catch(error => {
        console.log('[error]', error);
        Alert.alert('Error', error?.message || 'Invalid Credentials');
      });
  };
  const signOut = async () => {
    try {
      Alert.alert('Sign Out Successfully');
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.mainContiner}>
      <Text style={styles.titleStyle}>LogIn</Text>
      <TextInput
        placeholder="Enter Email"
        style={styles.inputStyle}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.inputStyle}
        value={pass}
        onChangeText={txt => setPass(txt)}
      />
      <Button title="LogIn" onPress={handleLogin} />
      <TouchableOpacity style={styles.btnStyle} onPress={Googlebtn}>
        <Text style={styles.textStyle}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle} onPress={signOut}>
        <Text style={styles.textStyle}>Sign out with Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  mainContiner: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
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
