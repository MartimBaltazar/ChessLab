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
        {/* Go Back Button */}
        <View style={styles.goBackButtonContainer}> 
        <TouchableOpacity onPress={handleGoBack}>
        <Image
            source={require("../../assets/pngs/left-arrow.png")}
            style={styles.goBackButtonImage}
          />        
          </TouchableOpacity>
        </View>
        
        <View style={styles.titleContainer}> 
        {/* Header Title */}
        <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* For alignment purposes */}
        <View style={styles.backButtonPlaceholder}></View>
      </View>

      {/* Add your profile content here */}
      <TouchableOpacity
      style={[styles.additionalButton, { marginTop: 70 }]} // Increase the marginTop value to make the buttons lower
      onPress={handleSignOut}
      >
        <Text style={styles.additionalButtonText}>Sign Out</Text>
        </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  header: {
    backgroundColor: colors.primary,
    height: 100,
    alignItems: "center",
    paddingTop: 50,
    flexDirection: 'row',
  },
  titleContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    color: colors.textLight,
    fontFamily: "Lato-Bold",
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButtonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
  },
  goBackButtonImage: {
    width: 24,
    height: 24,
    tintColor: colors.textLight,
  },
  backButtonPlaceholder: {
    justifyContent: 'flex-end',
    padding: 16,
  },

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

