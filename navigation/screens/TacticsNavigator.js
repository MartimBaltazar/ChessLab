import React, { useState, useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';

// import assets and components
import * as Font from "expo-font";

// import screens
import TacticsScreen from "./TacticsScreen";
import TacticalMotifsScreen from './TacticalMotifsScreen';
import TacticalPracticeScreen from './TacticalPracticeScreen';

// screen names
const Tactics = 'Tactics';
const TacticalMotifs = 'Tactical Motifs';
const TacticalPractice = 'Tactical Practice';

const Stack = createStackNavigator();

const TacticsNavigator = () => {
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
        <Stack.Screen name={Tactics} component={TacticsScreen}/>
        <Stack.Screen name={TacticalMotifs} component={TacticalMotifsScreen}/>
        <Stack.Screen name={TacticalPractice} component={TacticalPracticeScreen}/>
    </Stack.Navigator>
  );
}

export default TacticsNavigator;

