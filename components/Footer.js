import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors, auth } from "../config";

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: Colors.white, // Ensure this color is defined in your Colors object
    padding: 10,
    borderTopColor: Colors.lightGray, 
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    paddingBottom: 20,
    paddingTop: 20,
    width: '100%',
    height: 90,
  },
  icon: {
    color: Colors.font,
    fontSize: 25, // Increased font size for better visibility
    fontWeight: '600',
    paddingBottom: 30,
  },
});

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => console.log('Home pressed')}>
        <Text> <Icon name="home-outline" style={styles.icon} /> </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Map pressed')}>
        <Text> <Icon name="map-outline" style={styles.icon} /> </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => console.log('Book/Menu pressed')}>
        <Text> <Icon name="fast-food-outline" style={styles.icon} /> </Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => console.log('Book/Menu pressed')}>
        <Text> <Icon name="pizza-outline" style={styles.icon} /> </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => console.log('Teams pressed')}>
        <Text> <Icon name="people-outline" style={styles.icon} /> </Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => console.log('Profile pressed')}>
        <Text> <Icon name="person-outline" style={styles.icon} /> </Text>
      </TouchableOpacity>
    </View>
  );
};