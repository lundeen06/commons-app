import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Images, Colors, auth } from "../config";
import CircularProgressBar from "../components/CircularProgressBar";

const capacity = 9;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: Colors.white,
  },
});

export const Header = () => {
  return (
    // <TouchableOpacity onPress={() => console.log('capacity info pressed')}>
    <View style={styles.container}></View>
    // </TouchableOpacity>
  );
};