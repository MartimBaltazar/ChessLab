import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../assets/colors/colors";
import * as Font from "expo-font";

export default function HomeScreen() {
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
      {/* Three additional buttons */}
      <TouchableOpacity
        style={[styles.additionalButton, { marginTop: 70 }]} // Increase the marginTop value to make the buttons lower
        onPress={() => alert("Opening Repertoire button clicked")}
      >
        <Text style={styles.additionalButtonText}>Opening Repertoire</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.additionalButton, { marginTop: 20 }]} // Increase the marginTop value to make the buttons lower
        onPress={() => alert("Opening Practice button clicked")}
      >
        <Text style={styles.additionalButtonText}>Opening Practice</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.additionalButton, { marginTop: 20 }]} // Increase the marginTop value to make the buttons lower
        onPress={() => alert("Import from Lichess button clicked")}
      >
        <Text style={styles.additionalButtonText}>Import from Lichess</Text>
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
  },
  additionalButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontFamily: "Lato-Bold", // Use the name of the custom font here
  },
});
