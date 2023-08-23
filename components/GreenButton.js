import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"; 
import colors from "../assets/colors/colors.js";
import * as Font from "expo-font";
    
const GreenButton = ({title, onPress, marginTop}) => {
    
    const [fontsLoaded, setFontsLoaded] = useState(false);

    // Load the custom font
    useEffect(() => {
        async function loadFonts() {
        await Font.loadAsync({
            "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
        });
        setFontsLoaded(true);
        }
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null; // Font is not loaded yet, return null or a loading screen here
      }

    return (
        <TouchableOpacity
        style={[styles.additionalButton, { marginTop: marginTop }]} 
        onPress={onPress}
        >
        <Text style={styles.additionalButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

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

export default GreenButton;