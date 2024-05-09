import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Define your custom Colors object here if you haven't already
const Colors = {
  red: '#ff0000',
  // Add other colors as needed
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.red, // Use your custom color
    padding: 10,
  },
  icon: {
    marginLeft: 15,
    color: Colors.red, // Use your custom color
    fontSize: 30,
    marginVertical: 8,
    fontWeight: '600',
  },
});

const Footer = () => {
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

export default Footer;