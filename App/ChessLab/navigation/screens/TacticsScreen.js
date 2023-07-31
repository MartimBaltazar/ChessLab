import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from "../../assets/colors/colors";

export default function TacticsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
          {/* Three additional buttons */}
          <TouchableOpacity
            style={styles.additionalButton}
            onPress={() => alert('Tactical Motifs button clicked')}
          >
            <Text style={styles.additionalButtonText}>Tactical Motifs</Text>
          </TouchableOpacity>
    
          <TouchableOpacity
            style={styles.additionalButton}
            onPress={() => alert('Tactical Practice button clicked')}
          >
            <Text style={styles.additionalButtonText}>Tactical Practice</Text>
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