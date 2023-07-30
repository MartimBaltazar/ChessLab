import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from "../../assets/colors/colors";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
      {/* Three additional buttons */}
      <TouchableOpacity
        style={styles.additionalButton}
        onPress={() => alert('Opening Repertoire button clicked')}
      >
        <Text style={styles.additionalButtonText}>Opening Repertoire</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.additionalButton}
        onPress={() => alert('Opening Practice button clicked')}
      >
        <Text style={styles.additionalButtonText}>Opening Practice</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.additionalButton}
        onPress={() => alert('Import from Lichess button clicked')}
      >
        <Text style={styles.additionalButtonText}>Import from Lichess</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  additionalButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  additionalButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
