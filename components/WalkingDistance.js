import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors, auth } from "../config";

diningHall = {
    distance: 0.8,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 25,

    backgroundColor: '#fff', // Ensure this color is defined in your Colors object
    width: 165,
    height: 75,
    borderRadius: 30,
    borderColor: Colors.lightGray,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  distance: {
    color: Colors.darkGray,
    
  }, 
});

export const WalkingDistance = () => {
  return (
    <TouchableOpacity onPress={() => console.log('capacity info pressed')}>
        <View style={styles.container}>
            <Text style={styles.distance}>{diningHall.distance}mi</Text>
        </View>
    </TouchableOpacity>
   
  );
};