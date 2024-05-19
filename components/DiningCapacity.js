import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

import { Images, Colors, auth } from "../config";

const capacity = 0.25;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkGreen,
    width: 165,
    height: 165,
    borderRadius: 25,
  },
});

export const DiningCapacity = () => {
  const radius = 70;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (capacity * circumference);

  return (
    <TouchableOpacity onPress={() => console.log('capacity info pressed')}>
      <View style={styles.container}>
        <Svg height="100%" width="100%">
          <Rect x="0" y="0" rx="25" ry="25" width="100%" height="100%" fill={Colors.darkGreen} />
          <Circle
            stroke={Colors.white}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            cx="80"
            cy="80"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};
