import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { auth } from "../config";

testUser = {
  firstName: "first name",
}

user = testUser


export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <View style={styles.main}>
      {/* <Button title="Sign Out" onPress={handleLogout} /> */}
      {/* <Text> home </Text> */}
      <View style={styles.greeting}>
        <Text style={styles.h1}>Hello, {user.firstName}! </Text>
        <Text style={styles.subtitle}>See your dining options today!</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
        <Image source={{uri: '../assets/icon.png'}} style={styles.image} />
      </TouchableOpacity>
      <Footer />
    </View>
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
  greeting: {
    width: '100%',
    marginLeft: 100,
    marginTop: 20,
  },
  h1: {
    fontSize: 30,
    fontWeight: '600',
  },
  subtitle: {
    color: '#888',
    fontSize: 12,
    fontWeight: '600',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
});
