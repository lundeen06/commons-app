import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Images, Colors, auth } from "../config";

export const CommunityScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <>
      <Header />
      <View style={styles.main}>
        <View style={styles.hero}> 
          <Text style={styles.h1}>Community</Text>
        </View>
        
      </View>
      <Footer navigation={navigation} currentScreen={'Community'} style={styles.footer}/>
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
    paddingTop: 10,
    paddingLeft: 20,
  },
  footer: {
    justifySelf: 'flex-start',
  },
  hero: {
    width: '100%',
    // marginLeft: 50,
  },
  h1: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.font,
  },
  h5: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.subtitle,
  },
  subtitle: {
    color: '#888',
    fontSize: 12,
    fontWeight: '600',
  },
});
