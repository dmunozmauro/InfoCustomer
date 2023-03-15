import React from 'react';
import { View } from 'react-native';
import SlotMachine from 'react-native-slot-machine';

const RootComponent = ({ textValue }) => {
    return (
        <View>
            <SlotMachine
                duration={3000}
                height={65}
                padding={1}
                range="abcdefghijklmnopqrstuvwxyz"
                text={textValue}
                width={30}
            />
        </View>
    );
};

export default RootComponent;


