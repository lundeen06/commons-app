import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors, auth } from "../config";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Ensure this color is defined in your Colors object
    width: 165,
    height: 75,
    borderRadius: 30,
    borderColor: Colors.lightGray,
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

export const WalkingDistance = () => {
  return (
    <TouchableOpacity onPress={() => console.log('capacity info pressed')}>
        <View style={styles.container}>

        </View>
    </TouchableOpacity>
   
  );
};