import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { signOut } from "firebase/auth";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Food } from "../components/Food";
import { Images, Colors, auth } from "../config";
import Icon from 'react-native-vector-icons/Ionicons';

const bartlett = {
  shortName: 'Bartlett Dining',
  hours: {
    breakfastStart: '7am',
    breakfastEnd: '8:30am',
  },
  foods: [
    {
      name: 'Chicken Masala',
      description: '',
      avgRating: 4.3,
      recommended: true,
      allergens: [
        'dairy', 
      ],
      ingredients: [
        ''
      ],
      macroNutrients: [
        ''
      ],
      reviews: [
        {
          author: 'Lundeen Cahilly',
          authorTag: `LC '28`, 
          review: `this is a review text example with less than 60 characters.`,
          rating: 5,
        }
      ]
    },
    {
      name: 'Beyond Chicken Masala',
      description: '',
      avgRating: 4.1,
      recommended: true,
      allergens: [
        'vegan', 
        'soy',
      ],
      ingredients: [
        ''
      ],
      macroNutrients: [
        ''
      ],
      reviews: [
        {
          author: 'Luke Williamson',
          authorTag: `LW '27`, 
          review: `this is a review text example with less than 60 characters.`,
          rating: 4.1,
        }
      ]
    },
    {
      name: 'Cheeseburger',
      description: '',
      avgRating: 3,
      recommended: false,
      allergens: [
        'dairy'
      ],
      ingredients: [
        ''
      ],
      macroNutrients: [
        ''
      ],
      reviews: [
        {
          author: 'Avin Ramratnam',
          authorTag: `AR '28`, 
          review: `this is a review text example with less than 60 characters.`,
          rating: 3,
        }
      ]
    },
    {
      name: 'Penne Alla Vodka',
      description: '',
      avgRating: 1.7,
      recommended: true,
      allergens: [
        'dairy'
      ],
      ingredients: [
        ''
      ],
      macroNutrients: [
        ''
      ],
      reviews: [
        {
          author: 'Darren Zhu',
          authorTag: `DZ '28`, 
          review: `this is a review text example with less than 60 characters.`,
          rating: 4,
        }
      ]
    },
  ]
}

export const MenuScreen = ({ navigation, hall }) => {
  const [selectedOption, setSelectedOption] = useState('recommended');

  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const toggleOption = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Deselect if the same option is clicked again
    } else {
      setSelectedOption(option); // Select the new option
    }
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
          <Text style={styles.hours}> Today's Hours: {bartlett.hours.breakfastStart} — {bartlett.hours.breakfastEnd} </Text>
        </View>
        <View style={styles.optionsContainer}> 
          <TouchableOpacity 
            onPress={() => toggleOption('recommended')} 
            style={styles.option}>
            <Text style={[styles.optionsText, selectedOption === 'recommended'? styles.selected : {}]}>Recommended</Text>
            {selectedOption === 'recommended' && <View style={styles.underline} />}
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => toggleOption('fullMenu')} 
            style={styles.option}>
            <Text style={[styles.optionsText, selectedOption === 'fullMenu'? styles.selected : {}]}>Full Menu</Text>
            {selectedOption === 'fullMenu' && <View style={styles.underline} />}
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {selectedOption === 'recommended'
          ? bartlett.foods.filter(food => food.recommended).map((food) => (
            <Food food={food} />
          ))
          : bartlett.foods.map((food) => (
            <Food food={food} />
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
  optionsContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
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
    margin: 6,
    marginTop: 0,
    height: 20,
  },
  optionsText: {
    color: Colors.subtitle,
    fontWeight: '600',
    fontSize: 14,
  },
  scroll: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 6,
    paddingRight: 6,
    marginTop: 10,
  },
  foodContainer: {
    width: '100%',
  },  
  underline: {
    height: 2, // Adjust the height as needed
    width: '100%', // Stretch the underline to match the text width
    backgroundColor: Colors.font, // Use the font color for the underline
  },
  rating: {
    fontSize: 14,
    color: Colors.gray,
    fontWeight: '600',
    marginTop: 5,
  },
  star: {
    color: Colors.gray,
    fontSize: 12,
  },
});
