import React from 'react';
import {View, Text} from 'react-native'

const Countdown = ({timerRunning, duration}) => {
    
    if (!timerRunning) {
        return (
            <View>
                <Text>Please enter a journey time!</Text>
            </View>
        )
    }
    return (
        <View>
            <Text>{duration} seconds remaining</Text>
        </View>
    );
};

export default Countdown;