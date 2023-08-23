import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// import assets and components
import colors from "../../assets/colors/colors";
import * as Font from "expo-font";
import BackgroundImage from '../../components/BackgroundImage.js';
import GreenButton from "../../components/GreenButton";

const HomeScreen = () => {
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
      title: "Openings", // Set the header title
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

  const goToRepertoireScreen = () => {
    navigation.navigate('Opening Repertoire');
  }

  const goToPracticeScreen = () => {
    navigation.navigate('Opening Practice')
  }

  const goToLichessScreen = () => {
    navigation.navigate('Import From Lichess')
  }

  return (
    <BackgroundImage>
      <GreenButton title='Opening Repertoire' onPress={goToRepertoireScreen} marginTop={70}></GreenButton>
      <GreenButton title='Opening Practice' onPress={goToPracticeScreen}></GreenButton>
      <GreenButton title='Import From Lichess' onPress={goToLichessScreen}></GreenButton>
    </BackgroundImage>
  );
}

export default HomeScreen;

