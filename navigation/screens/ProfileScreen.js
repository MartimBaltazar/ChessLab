import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import colors from "../../assets/colors/colors.js";
import { useNavigation, HeaderBackButton } from "@react-navigation/core";
import { auth } from "../../firebase.js";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen (in this case, MoreScreen)
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        {/* Back Arrow Button */}

        {/* Header Title */}
        <Text style={styles.headerTitle}>Profile</Text>

        {/* Go Back Button */}
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Image
            source={require("../../assets/pngs/left-arrow.png")}
            style={styles.goBackButtonImage}
          />        
          </TouchableOpacity>
      </View>

      {/* Add your profile content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 22,
    color: colors.textLight,
    fontFamily: "Lato-Bold",
  },
  /*não consegui alinhar o botão à esquerda ainda mas também não tentei bem, vou dormir */
  goBackButton: {
    padding: 5,
  },
  goBackButtonImage: {
    width: 24,
    height: 24,
    tintColor: colors.textLight,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: colors.textLight,
  },
});

