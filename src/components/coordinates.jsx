import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps'

export default function Coordinates() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const longitude = JSON.stringify(location.coords.longitude);
    const latitude = JSON.stringify(location.coords.latitude);
    console.log(typeof latitude, '<<this is the type of latitude');
    console.log(typeof +latitude, '<<this is the type of latitude with a +');
    text = `Latitude: ${latitude} Longitude: ${longitude}`;
  }

  var markers = [
    {
      latitude: 37.78825,
      longitude: -122.4324,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <MapView
        style={{ width: 600, height: 300 }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        
      >
      <Marker key={1} coordinate={'hello'} title={'marker'} description={'the marker'}/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#4BA64F',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
