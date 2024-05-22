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
        {/* Specify the source of the image */}
        <Image 
          style={styles.image} // Adjust the size as needed
          source={require('../assets/full-map.png')} // Use uri property to specify the image source
        />
      </View>
      <Footer navigation={navigation} currentScreen={'Map'} style={styles.footer}/>
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
  image: {
    height: '100%',
    width: '100%',
  },
  footer: {
    justifySelf: 'flex-start',
  },
});
