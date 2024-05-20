import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { Images, Colors, auth } from "../config";

export const MapScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <>
      <View style={styles.main}>
        <Text> [map goes here] </Text>
      </View>
      <Footer navigation={navigation} style={styles.footer}/>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  footer: {
    justifySelf: 'flex-start',
  },
});
