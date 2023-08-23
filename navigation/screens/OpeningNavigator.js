import React, { useState, useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';

// import assets and components
import * as Font from "expo-font";

// import screens
import OpeningRepertoireScreen from './OpeningRepertoireScreen';
import OpeningPracticeScreen from "./OpeningPracticeScreen";
import ImportFromLichessScreen from "./ImportFromLichessScreen";
import HomeScreen from "./HomeScreen";

// screen names
const Home = 'Home';
const OpeningRepertoire = 'Opening Repertoire';
const OpeningPractice = 'Opening Practice';
const ImportFromLichess = 'Import From Lichess';

const Stack = createStackNavigator();

const OpeningNavigator = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load the custom font
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Lato-Bold": require("../../assets/fonts/Lato-Bold.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Font is not loaded yet, return null or a loading screen here
  }

  return (
    <Stack.Navigator>
        <Stack.Screen name={Home} component={HomeScreen}/>
        <Stack.Screen name={OpeningRepertoire} component={OpeningRepertoireScreen}/>
        <Stack.Screen name={OpeningPractice} component={OpeningPracticeScreen}/>
        <Stack.Screen name={ImportFromLichess} component={ImportFromLichessScreen}/>
    </Stack.Navigator>
  );
}

export default OpeningNavigator;

