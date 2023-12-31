import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../../firebase.js";

// Import assets and components
import * as Font from "expo-font";
import colors from "../../assets/colors/colors.js";
import GreenButton from "../../components/GreenButton.js";
import BackgroundImage from '../../components/BackgroundImage.js';

export default function ProfileScreen() {

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
      title: "Profile", // Set the header title
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

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <BackgroundImage>
      <GreenButton title='Sign Out' onPress={handleSignOut} marginTop={70}></GreenButton>
    </BackgroundImage>
  );
};



