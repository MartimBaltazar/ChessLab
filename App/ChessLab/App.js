import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import colors from './assets/colors/colors'; // Import colors


export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  });

  if (!fontsLoaded) {
    // Font is not loaded yet, you can show a loading screen or a placeholder
    return null; // Replace this with your loading screen component if desired
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/pngs/green-book.png')} style={styles.image} />
      <Text style={styles.text}>Hello World</Text>
      {/* Other components or elements can go here */}
      
    </View>
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
