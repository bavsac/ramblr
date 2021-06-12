import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Amplify, { Auth } from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import Coordinates from './src/components/coordinates';
import { Timeselector } from './src/components/timeselector';
import Header from './src/components/Header';
import AppButton from './src/components/AppButton';

Amplify.configure(config);

function App(props) {
  console.log(props.authData.attributes.email);
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }
  return (
    <View style={styles.container}>
      <Header />
      <AppButton onPress={signOut} title="Sign Out" />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Timeselector />
      <Coordinates />
    </View>
  );
}

//this is already signing up users and forgot user details
export default withAuthenticator(App);

const ShowAfterSignIn = () => {
  <lable>Hello</lable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63a55d',
    alignItems: 'center',
  },
  signOut: {
    fontSize: 40,
  },
});
