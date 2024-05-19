import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Images, Colors, auth } from "../config";
import CircularProgressBar from "../components/CircularProgressBar";

const capacity = 9;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
    
    backgroundColor: Colors.darkGreen,
    width: 165,
    height: 165,
    borderRadius: 25,
  },
  description: {
    color: '#b1bcb5',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginBottom: 10,
    fontWeight: '600'
  }
});

export const DiningCapacity = ({ user }) => {
  return (
    // <TouchableOpacity onPress={() => console.log('capacity info pressed')}>
    <View style={styles.container}>
      <CircularProgressBar percent={capacity} />
      <Text style={styles.description}>{user.recommendedDiningHall} is currently at {capacity}% capacity.</Text>
    </View>
    // </TouchableOpacity>
  );
};