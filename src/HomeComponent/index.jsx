import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

export default HomeComponent = ({ nav }) => {

    const handleSignIn = () => {
        Alert.alert('Coming soon!');
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Welcome to WordsRoot!</Text>
            </View>

            <View style={styles.menuButtons}>
                <View style={styles.viewButtons}>
                    <Button
                        title="Sign in"
                        onPress={handleSignIn}
                    />
                </View>
                <View style={styles.viewButtons}>
                    <Button
                        color={"green"}
                        title="Continue as guest"
                        onPress={() => nav.navigate('Main')}
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


