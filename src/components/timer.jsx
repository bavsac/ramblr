// React Native CountDown Timer | react-native-countdown-component
// https://aboutreact.com/react-native-countdown-timer/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

//import CountDown to show the timer
import CountDown from 'react-native-countdown-component';

//import moment to help you play with date and time
import moment from 'moment';

const Timer = ({ timerDuration }) => {
  const [totalDuration, setTotalDuration] = useState(0);

  console.log(timerDuration, 'timerDuration inside Timer');

  useEffect(
    (timerDuration) => {
      var today = new Date();
      // console.log(today, '<< today');
      // var date =
      //   today.getFullYear() +
      //   '-' +
      //   (today.getMonth() + 1) +
      //   '-' +
      //   today.getDate();
      var time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      var dateTime = date + ' ' + time;
      //We are showing the coundown timer for a given expiry date-time
      //If you are making a quize type app then you need to make a simple timer
      //which can be done by using the simple like given below
      //that.setState({ totalDuration: 30 }); //which is 30 sec
      var date = moment().utcOffset('-02:00').format('YYYY-MM-DD hh:mm:ss');
      //Getting the current date-time with required formate and UTC
      var expirydate = timerDuration; //You can set your own date-time
      //Let suppose we have to show the countdown for above date-time
      var diffr = moment.duration(moment(timerDuration).diff(moment(date)));
      //difference of the expiry date-time given and current date-time
      var hours = parseInt(diffr.asHours());
      var minutes = parseInt(diffr.minutes());
      var seconds = parseInt(diffr.seconds());
      console.log(hours, minutes);

      var d = hours * 60 * 60 + minutes * 60 + seconds;
      console.log(hours, minutes);
      //converting in seconds
      // console.log(totalDuration, '<<totalDuration');
      console.log(d, hours, minutes, seconds, '<<< hours, minutes, seconds');
      setTotalDuration(d);
      //Settign up the duration of countdown in seconds to re-render
    },
    [timerDuration]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <CountDown
          until={totalDuration}
          //duration of countdown in seconds
          timetoShow={('H', 'M', 'S')}
          //formate to show
          onFinish={() => alert('finished')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});
