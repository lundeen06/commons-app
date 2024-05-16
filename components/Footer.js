import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors, auth } from "../config";

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.red, // Ensure this color is defined in your Colors object
    padding: 10,
    paddingBottom: 20,
    width: '100%',
    height: 100,
  },
  icon: {
    marginLeft: 20, // Increased margin for better spacing
    color: Colors.white,
    fontSize: 25, // Increased font size for better visibility
    marginVertical: 10, // Adjusted vertical margin for better spacing
    fontWeight: '600',
    paddingBottom: 30,
  },
});

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => console.log('Home pressed')}>
        <Text> <Icon name="home" style={styles.icon} /> </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Map pressed')}>
        <Text> <Icon name="map" style={styles.icon} /> </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Book/Menu pressed')}>
        <Text> <Icon name="book" style={styles.icon} /> </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Teams pressed')}>
        <Text> <Icon name="people" style={styles.icon} /> </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Profile pressed')}>
        <Text> <Icon name="person" style={styles.icon} /> </Text>
      </TouchableOpacity>
    </View>
  );
};