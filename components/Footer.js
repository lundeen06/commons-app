import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors, auth } from "../config";

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.red, // Ensure this color is defined in your Colors object
    padding: 10,
  },
  icon: {
    marginLeft: 20, // Increased margin for better spacing
    color: Colors.white,
    fontSize: 35, // Increased font size for better visibility
    marginVertical: 10, // Adjusted vertical margin for better spacing
    fontWeight: '600',
  },
});

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => console.log('Home pressed')}>
        <Icon name="home" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Map pressed')}>
        <Icon name="map" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Book/Menu pressed')}>
        <Icon name="book" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Teams pressed')}>
        <Icon name="people" size={30} style={styles.icon} /> {/* Adjusted to 'people' for teams */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Profile pressed')}>
        <Icon name="person" size={30} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
