import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeComponent from './src/HomeComponent';
import MainComponent from './src/MainComponent';
import RootModeComponent from './src/GameModeComponents/RootModeComponent';


const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <HomeComponent nav={navigation} />
    </View>
  );
}

const MainScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <MainComponent nav={navigation} />
    </View>
  );
}

const RootModeScreen = () => {
  return (
    <View style={styles.container}>
      <RootModeComponent />
    </View>
  );
}

const RandomModeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Not available</Text>
    </View>
  );
}

const NoSenseModeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Not available</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Root Mode"
          component={RootModeScreen}
        />
        <Stack.Screen
          name="Random Mode"
          component={RandomModeScreen}
        />
        <Stack.Screen
          name="No Sense Mode"
          component={NoSenseModeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});