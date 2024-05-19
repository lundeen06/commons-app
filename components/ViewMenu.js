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
    padding: 15,
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
    fontSize: 18,
    fontWeight: '600',
  }, 
  description: {
    color: Colors.gray,
    fontSize: 12,
  }
});

export const ViewMenu = () => {
  return (
    <TouchableOpacity onPress={() => console.log('capacity info pressed')}>
        <View style={styles.container}>
            <Text style={styles.distance}>View Menu</Text>
            <Text style={styles.description}>menu, hours, and more</Text>
        </View>
    </TouchableOpacity>
   
  );
};