import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import { auth } from './firebase';

// Screens
import LoginScreen from './navigation/screens/LoginScreen';
import ProfileScreen from './navigation/screens/ProfileScreen';
import MainContainer from './navigation/MainContainer';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  });

  // Move the useState hook outside of the conditional block
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe; // Clean up the event listener when the component unmounts
  }, []);

  if (!fontsLoaded) {
    // Font is not loaded yet, you can show a loading screen or a placeholder
    return null; // Replace this with your loading screen component if desired
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="MainContainer" component={MainContainer} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}

        <Stack.Screen name="Profile" component={ProfileScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
