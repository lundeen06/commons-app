import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { Images, Colors, auth } from "../config";

export const MenuScreen = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const options = ['Open now', 'Within.5mi', 'Not busy'];

  const toggleSelector = (option) => {
    setSelectedOptions(prevState => ({
     ...prevState,
      [option]:!prevState[option]
    }));
  };

  return (
    <View style={styles.main}>
      <View style={styles.hero}> 
        <Text style={styles.h1}>Menus and Hours</Text>
        <View style={styles.selectorContainer}> 
          {options.map((option, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.selector, 
                selectedOptions[option]? {backgroundColor: Colors.font} : {backgroundColor: Colors.white}
              ]}
              onPress={() => toggleSelector(option)}
            >
              <Text style={[
                styles.selectorText, 
                selectedOptions[option]? {color: Colors.white} : {color: Colors.font}
              ]}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Footer navigation={navigation} />
    </View>
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
    paddingTop: 10,
  },
  footer: {
    justifySelf: 'flex-start',
  },
  hero: {
    width: 'calc(100% - 100px)',
    height: 50,
    marginLeft: 50,
    marginRight: 50,
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
  selectorContainer: {
    flex: 2, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  selector: {
    width: 90,
    height: 30,
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 5,
    backgroundColor: Colors.white, // Ensure this color is defined in your Colors object
    borderColor: Colors.lightGray,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  selectorText: {
    color: Colors.font,
  }
});
