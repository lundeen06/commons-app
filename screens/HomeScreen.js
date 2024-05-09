import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer"

import { auth } from "../config";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
  return (
    <View style={styles.main}>
      <Button title="Sign Out" onPress={handleLogout} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
