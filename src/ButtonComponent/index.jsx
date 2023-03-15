import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default ButtonComponent = ({ onPress, disabled }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                title="Spin"
                disabled={disabled}
                style={(disabled) ? styles.disabled : styles.roundButton} >
                <Text>Spin</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    roundButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'lightgreen',
    },
    disabled: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        opacity: 0.1
    }
});



