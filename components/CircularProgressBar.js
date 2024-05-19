import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Images, Colors } from "../config";

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 60,
    height: 60,
  },
  baseCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#ccc',
  },
  progressCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#007AFF',
    position: 'absolute',
  },
  percentText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -28 }, { translateY: -5 }],
    fontSize: 14,
    lineHeight: 14,
    width: '100%',
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '800'
  },
});

const CircularProgressBar = ({ percent }) => {
  // Calculate the rotation angle based on the percentage
  rotationAngle = 360 * (percent / 100); // Calculate the exact angle for percentages over 50%

  return (
    <View style={styles.container}>
      {/* Base Circle */}
      {/* <View style={styles.baseCircle}></View> */}

      {/* Progress Circle */}
      <View style={[styles.progressCircle, { transform: [{ rotate: `${rotationAngle}deg` }] }]} />

      {/* Percentage Text */}
      <Text style={styles.percentText}>{percent}%</Text>
    </View>
  );
};

export default CircularProgressBar;
