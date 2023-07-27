import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import colors from './assets/colors/colors'; // Import colors
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  });

  if (!fontsLoaded) {
    // Font is not loaded yet, you can show a loading screen or a placeholder
    return null; // Replace this with your loading screen component if desired
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen options = {{headerShown : false }} name="Login" component={LoginScreen} />
       <Stack.Screen name="Home" component={HomeScreen} />
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
  },
  text: {
    fontFamily: 'Lato-Bold', // Use the registered font family name here
    fontSize: 44, // You can adjust the font size as well
    color: colors.primary
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
