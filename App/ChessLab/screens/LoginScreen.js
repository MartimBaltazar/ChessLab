import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../assets/colors/colors";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

const loginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handeSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with : ",user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password).then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Logged in with : ",user.email);
    })
    .catch((error) => alert(error.message));
};
  return (
    <KeyboardAvoidingView style={styles.container} behaviour="padding">
      <View style={styles.inputContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/pngs/logo.png")}
            style={styles.logoIcon}
          />
        </View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handeSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  logoContainer: {
    flex: 1, // Take all available vertical space
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    marginBottom: 130,
  },
  logoIcon: {
    width: 150,
    height: 170,
    resizeMode: "contain",
  },
  input: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 50,
  },
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  registerText: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
});
