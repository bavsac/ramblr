import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import Coordinates from './src/components/coordinates';

Amplify.configure(config);

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
      <Coordinates />
    </View>
  );
}

//this is already signing up users and forgot user details
export default withAuthenticator(App, {
  // Render a sign out button once logged in
  includeGreetings: true,
  usernameAttributes: 'email'
});

const ShowAfterSignIn = () => {
  <lable>Hello</lable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
