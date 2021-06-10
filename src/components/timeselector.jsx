import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Timer from './timer'

export const Timeselector = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedTime, setSelectedTime] = useState(0)
  const [timerDuration, setTimerDuration] = useState()

  const onChange = (event, selectedDate) => {
    
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setSelectedTime(JSON.stringify(event.nativeEvent.timestamp));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
   showMode('time');
  };
  let expiry;
   if (selectedTime !== 0) {

    expiry = selectedTime.slice(1, -6).replace(/T/g,' ');
   }
  //  console.log(typeof expiry, '<<< expiry type')
  console.log(timerDuration, '<<inside timeselector')

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      <View>
        <Button onPress={() => {setTimerDuration(expiry)}} title="Start timer!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Timer timerDuration={timerDuration}/>
    </View>
  );
};