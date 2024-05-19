import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Images, Colors, auth } from "../config";
import CircularProgressBar from "../components/CircularProgressBar";

const capacity = 25;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkGreen,
    width: 165,
    height: 165,
    borderRadius: 25,
  },
  description: {
    color: Colors.white,
    fontSize: 10,
  }
});

export const DiningCapacity = () => {
  return (
    <TouchableOpacity onPress={() => console.log('capacity info pressed')}>
      <View style={styles.container}>
        <CircularProgressBar percent={capacity} />
        <Text style={styles.description}>{user.recommendedDiningHall} is currently at {capacity}% capacity</Text>
      </View>
    </TouchableOpacity>
  );
};