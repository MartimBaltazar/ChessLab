import React, { useState, useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';

// import assets and components
import * as Font from "expo-font";

// import screens
import MoreScreen from './MoreScreen';
import GetStartedScreen from './GetStartedScreen';
import SRSScreen from './SRSScreen';
import AboutUsScreen from './AboutUsScreen';
import FeedbackScreen from './FeedbackScreen';
import StoreScreen from './StoreScreen';

// screen names
const More = 'More';
const GetStarted = 'Get Started';
const SRS = 'SRS';
const AboutUs = 'About Us';
const Feedback = 'Feedback';
const Store = 'Store'

const Stack = createStackNavigator();

const MoreNavigator = () => {
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
        <Stack.Screen name={More} component={MoreScreen}/>
        <Stack.Screen name={GetStarted} component={GetStartedScreen}/>
        <Stack.Screen name={SRS} component={SRSScreen}/>
        <Stack.Screen name={AboutUs} component={AboutUsScreen}/>
        <Stack.Screen name={Feedback} component={FeedbackScreen}/>
        <Stack.Screen name={Store} component={StoreScreen}/>
    </Stack.Navigator>
  );
}

export default MoreNavigator;

