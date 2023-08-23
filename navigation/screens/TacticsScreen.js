import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// import assets and components
import colors from "../../assets/colors/colors";
import * as Font from "expo-font";
import BackgroundImage from '../../components/BackgroundImage.js';
import GreenButton from "../../components/GreenButton";

export default function TacticsScreen() {
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

  // Set the header title and background color
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: "Tactics", // Set the header title
      headerStyle: {
        backgroundColor: colors.primary, // Set the header background color
        height: 100
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

  const goToMotifsScreen = () => {
    navigation.navigate('Tactical Motifs')
  };

  const goToPracticeScreen = () => {
    navigation.navigate('Tactical Practice')
  };

  return (
    <BackgroundImage>
      <GreenButton title='Tactical Motifs' onPress={goToMotifsScreen} marginTop={70}></GreenButton>
      <GreenButton title='Tactical Practice' onPress={goToPracticeScreen}></GreenButton>
    </BackgroundImage>
  );
}
