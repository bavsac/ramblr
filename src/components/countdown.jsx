import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Countdown = ({ timerRunning, duration }) => {
  const [remaining, setRemaining] = useState(duration);

//   useEffect(() => {
//       console.log(duration, '<<< remaining line 8');
//       const countTimer = setInterval(() => {
//         setRemaining((prevCount) => prevCount - 1);
//         console.log(remaining, '<<< remaining line 11');
//       }, 5000);
//     });

  if (!timerRunning) {
    return (
      <View>
        {/* <Text>Please enter a journey time! {remaining} </Text> */}
      </View>
    );
  }
  return (
    <View>
      {/* <Text>seconds remaining: {remaining} </Text> */}
    </View>
  );
};

export default Countdown;
