import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from "../../assets/colors/colors.js";

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
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  additionalButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
