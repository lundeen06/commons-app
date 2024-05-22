import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Images, Colors, auth } from "../config";
import Icon from 'react-native-vector-icons/Ionicons';

const bartlett = {
  shortName: 'Bartlett Dining',
  hours: {
    breakfastStart: '7am',
    breakfastEnd: '8:30am',
  },
}

export const MenuScreen = ({ navigation, hall }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const toggleOption = (option) => {
    setSelectedOption(option);
    console.log(selectedOption)
  };

  return (
    <>
      <Header />
      <View style={styles.main}>
        <View style={styles.hero}> 
          <View style={styles.titleContainer}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Dining')}>
                <View style={styles.iconContainer}>
                  <Icon style={styles.icon} name="chevron-back-outline" />
                </View>
            </TouchableOpacity>

            <Text style={styles.h1}>{bartlett.shortName}</Text>
          </View>
          <Text style={styles.hours}> Today's Hours: {bartlett.hours.breakfastStart} — {bartlett.hours.breakfastEnd} </Text>
        </View>
        <View style={styles.optionsContainer}> 
        <TouchableOpacity 
          onPress={() => toggleOption('recommended')} 
          style={[
            styles.option, 
            selectedOption == 'recommended'? {
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: Colors.font,
            } : {}
          ]}>
          <Text style={styles.optionsText}>Recommended</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => toggleOption('fullMenu')} 
          style={[
            styles.option, 
            selectedOption == 'fullMenu'? {
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: Colors.font,
            } : {}
          ]}>
          <Text style={styles.optionsText}>Full Menu</Text>
        </TouchableOpacity>
        </View>
      </View>
      <Footer navigation={navigation} currentScreen={'Dining'} style={styles.footer}/>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  optionsContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
    height: '100%'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  iconContainer: {
    backgroundColor: Colors.lightGray,
    borderRadius: 300,
    marginRight: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
  },
  icon: {
    fontSize: 28,
    color: Colors.font,
  },
  hours: {
    fontSize: 18, 
    fontWeight: '600',
    paddingTop: 20,
    color: Colors.font,
  },
  footer: {
    justifySelf: 'flex-start',
  },
  hero: {
    width: '100%',
  },
  h1: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.font,
  },
  h5: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.subtitle,
  },
  subtitle: {
    color: '#888',
    fontSize: 12,
    fontWeight: '600',
  },
  option: {
    textDecorationLine: 'none', // Default style
    margin: 6,
    marginTop: 0,
    height: 20,
  },
  optionsText: {
    color: Colors.subtitle,
    fontWeight: '600',
    fontSize: 14,
  },
  selected: {
    textDecorationLine: 'underline', // Corrected to use underline
    textDecorationStyle: 'solid',
    textDecorationColor: Colors.font, // Ensure this color exists in your theme
  },
});
