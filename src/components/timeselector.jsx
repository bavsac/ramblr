import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Timer from './timer'
import {durationInSeconds} from '../utils/time-utils'
import Countdown from './countdown'

export const Timeselector = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [duration, setDuration] = useState(' ');
  const [timerRunning, setTimerRunning] = useState(false)

  const onChange = (event, selectedDate) => {
    
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const output = durationInSeconds(event.nativeEvent.timestamp)
    setDuration(output)
    console.log(output, '<< output')
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

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      <View>
        <Button onPress={() => {setTimerRunning(true)}} title="Start timer!" />
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
      <Countdown timerRunning={timerRunning} duration={duration}/>
    </View>
  );
};