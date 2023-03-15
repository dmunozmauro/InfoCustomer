import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default MainComponent = ({ nav }) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Selected game option</Text>
            </View>

            <View style={styles.menuButtons}>
                <View style={styles.viewButtons}>
                    <Button
                        title="Root Mode"
                        onPress={() => nav.navigate('Root Mode')}
                    />
                </View>
                <View style={styles.viewButtons}>
                    <Button
                        title="Random Mode"
                        onPress={() => nav.navigate('Random Mode')}
                    />
                </View>
                <View style={styles.viewButtons}>
                    <Button
                        title="No Sense Mode"
                        onPress={() => nav.navigate('No Sense Mode')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: "50%"
    },
    titleText: {
        color: "black", fontSize: 30, fontWeight: "bold"
    },
    menuButtons: {
        marginTop: "10%"
    },
    viewButtons: {
        padding: 20
    }
});


