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
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    color: Colors.font,
    fontSize: 25, // Increased font size for better visibility
    fontWeight: '600',
    paddingBottom: 30,
  },
  indicatorDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.font,
    marginTop: 5,
  },
});

export const Footer = ({ navigation, currentScreen }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
        <Text> 
          <Icon name="home-outline" style={styles.icon} /> 
        </Text>
        <View style={[
            styles.indicatorDot,
            currentScreen == 'Home' ? {opacity: 100} : {opacity: 0},
          ]} 
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Map')}>
        <Text> 
          <Icon name="map-outline" style={styles.icon} /> 
        </Text>
        <View style={[
            styles.indicatorDot,
            currentScreen == 'Map' ? {opacity: 100} : {opacity: 0},
          ]} 
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Menu')}>
        <Text> 
          <Icon name="fast-food-outline" style={styles.icon} /> 
        </Text>
        <View style={[
            styles.indicatorDot,
            currentScreen == 'Menu' ? {opacity: 100} : {opacity: 0},
          ]} 
        />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
        <Text> 
          <Icon name="person-outline" style={styles.icon} /> 
        </Text>
        <View style={[
            styles.indicatorDot,
            currentScreen == 'Profile' ? {opacity: 100} : {opacity: 0},
          ]} 
        />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Community')}>
        <Text> 
          <Icon name="people-outline" style={styles.icon} /> 
        </Text>
        <View style={[
            styles.indicatorDot,
            currentScreen == 'Community' ? {opacity: 100} : {opacity: 0},
          ]} 
        />
      </TouchableOpacity>
    </View>
  );
};