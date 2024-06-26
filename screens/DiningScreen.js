import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { DiningHall } from "../components/DiningHall";
import { Header } from "../components/Header";
import { Images, Colors, auth } from "../config";

diningHalls = [
  {
    name: "Bartlett Dining Commons",
    distance: 0.5,
    img: 'https://dining.uchicago.edu/files/2018/06/MG_4387-1grbi2i-1080x722.jpg',
    open: true,
    close: self.distance <= 0.5,
    busy: false,
  },
  {
    name: "Baker Dining Commons",
    distance: 0.8,
    img: 'https://dining.uchicago.edu/files/2019/07/Baker-dining-commons.jpg',
    open: true,
    close: self.distance <= 0.5,
    busy: true,
  },
  {
    name: "Woodlawn Dining Commons",
    distance: 0.2,
    img: 'https://dining.uchicago.edu/files/2019/07/woodlawn-e1603137558920-600x398.jpg',
    open: false,
    close: self.distance <= 0.5,
    busy: false,
  },
  {
    name: "Cathey Dining Commons",
    distance: 0.8,
    img: 'https://dining.uchicago.edu/files/2019/07/Cathey-Dining-Commons-1-1080x720.jpg',
    open: true,
    close: self.distance <= 0.5,
    busy: false,
  },
]

export const DiningScreen = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    'Open now': false,
    'Within.5mi': false,
    'Not busy': false,
  });

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

  // Filter dining halls based on selected options
  const filteredDiningHalls = diningHalls.filter(hall => {
    let showHall = true;

    // Check if 'Within.5mi' is selected and the hall is within.5mi
    if (selectedOptions['Within.5mi'] && hall.distance > 0.5) {
      showHall = false;
    }

    // Check if 'Open now' is selected and the hall is open
    if (selectedOptions['Open now'] &&!hall.open) {
      showHall = false;
    }

    // Check if 'Not busy' is selected and the hall is busy
    if (selectedOptions['Not busy'] && hall.busy) {
      showHall = false;
    }

    return showHall;
  });

  return (
    <>
      <Header />
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
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {filteredDiningHalls.map((hall) => (
            <DiningHall navigation={navigation} hall={hall} />
          ))}
        </ScrollView>
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
  scroll: {
    marginTop: 40,
    width: '100%',
  },
  footer: {
    justifySelf: 'flex-start',
  },
  hero: {
    width: 'calc(100% - 40px)',
    height: 50,
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
