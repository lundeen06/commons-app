import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";

import { auth } from "../config";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <View style={styles.main}>
      {/* <Button title="Sign Out" onPress={handleLogout} /> */}
      {/* <Text> home </Text> */}
      <Text> test </Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column', // Ensure children are laid out vertically
    justifyContent: 'space-between', // Pushes footer to the bottom
    alignItems: 'center', // Centers content horizontally if needed
    width: '100%', // Ensures the view takes full width
    height: '100%', // Ensures the view takes full height
  },
});
