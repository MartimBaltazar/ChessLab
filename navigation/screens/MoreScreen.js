import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

// import assets and components
import colors from "../../assets/colors/colors";
import * as Font from "expo-font";
import BackgroundImage from "../../components/BackgroundImage";
import GreenButton from "../../components/GreenButton";

export default function MoreScreen() {
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

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "ChessLab", // Set the header title
      headerStyle: {
        backgroundColor: colors.primary, // Set the header background color
        height: 100,
      },
      headerTintColor: colors.textLight, // Set the header text color
      headerTitleStyle: {
        fontFamily: "Lato-Bold", // Set the font family for the header title
        fontSize: 22,
      },
      headerTitleContainerStyle: {
        paddingBottom: 5, // Adjust this value to move the title higher
      },
      headerTitleAlign: "center",
    });
  }, [navigation]);

  if (!fontsLoaded) {
    return null; // Font is not loaded yet, return null or a loading screen here
  }

  const goToGetStartedScreen = () => {
    navigation.navigate('Get Started')
  };

  const goToSRSScreen = () => {
    navigation.navigate('SRS')
  };

  const goToAboutUsScreen = () => {
    navigation.navigate('About Us')
  };

  const goToFeedbackScreen = () => {
    navigation.navigate('Feedback')
  };

  const goToStoreScreen = () => {
    navigation.navigate('Store')
  };

  return (
    <BackgroundImage>
      <GreenButton title='Get Started' onPress={goToGetStartedScreen} marginTop={70} ></GreenButton>

      <GreenButton title='SRS Training' onPress={goToSRSScreen}></GreenButton>
      
      <GreenButton title='About Us' onPress={goToAboutUsScreen} ></GreenButton>

      <GreenButton title='Give Us Feedback' onPress={goToFeedbackScreen} ></GreenButton>

      <GreenButton title='Store' onPress={goToStoreScreen} ></GreenButton>
    </BackgroundImage>
  );
}
