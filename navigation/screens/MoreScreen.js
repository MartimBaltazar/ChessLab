import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/core";

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

  const handleProfileButtonClick = () => {
    navigation.navigate('Profile'); // Navigate to the 'Profile' screen
  };

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

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start", // Set justifyContent to "flex-start" to align the content (buttons) to the top
        backgroundColor: colors.background,
      }}
    >
      {/* additional buttons */}

      <TouchableOpacity
        style={[styles.additionalButton, { marginTop: 70 }]} // Increase the marginTop value to make the buttons lower
        onPress={() => alert("SRS button clicked")}
      >
        <Text style={styles.additionalButtonText}>SRS Training</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.additionalButton, { marginTop: 20 }]} // Increase the marginTop value to make the buttons lower
        onPress={() => alert("Get Started button clicked")}
      >
        <Text style={styles.additionalButtonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.additionalButton, { marginTop: 20 }]} // Increase the marginTop value to make the buttons lower
        onPress={() => alert("About Us button clicked")}
      >
        <Text style={styles.additionalButtonText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.additionalButton, { marginTop: 20 }]} // Increase the marginTop value to make the buttons lower
        onPress={() => alert("Avaialable soon!")}
      >
        <Text style={styles.additionalButtonText}>Give us Feedback</Text>
      </TouchableOpacity>
      
    </View>
  );
}
const styles = StyleSheet.create({
  additionalButton: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 20,
    width: "70%",
    borderColor: colors.border,
    borderWidth: 1,
    alignContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  additionalButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontFamily: "Lato-Bold", // Use the name of the custom font here
  },
});
