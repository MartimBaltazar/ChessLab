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
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
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
    alignItems: "center",
    paddingTop: 50,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 22,
    color: colors.textLight,
    fontFamily: "Lato-Bold",
    justifyContent: 'center',
  },
  /* MARTIM AJUDA ME PQP NAO CONSIGO METER O TEXTO NO CENTRO */
  goBackButtonContainer: {
    paddingRight: 130,
    paddingLeft: 10,
  },
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

