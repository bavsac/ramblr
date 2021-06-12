import React, { useState, useEffect } from 'react';
import { View, Button, Platform, Text } from 'react-native';
import * as SMS from 'expo-sms'

const AlertTimer = () => {
  const [timer, setTimer] = useState(5000);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlert(true);
    }, timer);
  }, [alert]);

  if (!alert) return null;

  return (<View>
      <Text>Sending message</Text>
      {/* {SMS.sendSMSAsync('07553186033', 'Parsley says hello')}; */}
      {SMS.sendSMSAsync()}
  </View> 
  
  )
};

export default AlertTimer;
