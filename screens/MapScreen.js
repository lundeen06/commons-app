import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { Images, Colors, auth } from "../config";

export const MapScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <View style={styles.main}>
      <Footer />
    </View>
  );
};

// Define styles inside the component
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#450', // Assuming you meant #FF4500 for a bright orange color
    width: '100%', // Use flex: 1 for full screen
    height: '100%', // Use flex: 1 for full screen
  }
});
