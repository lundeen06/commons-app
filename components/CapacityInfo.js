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
    backgroundColor: Colors.red, // Ensure this color is defined in your Colors object
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});

export const CapacityInfo = () => {
  return (
    
    <TouchableOpacity onPress={() => console.log('capacity info pressed')}>
        <View style={styles.container}>

        </View>
    </TouchableOpacity>
   
  );
};