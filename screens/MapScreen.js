import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native"; // Make sure to import Text
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { auth } from "../config";
import { useNavigation } from '@react-navigation/native';

export const MapScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Footer />
    </View>
  );
};

styles = StyleSheet.create({
  main: {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
  }
});