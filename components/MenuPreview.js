import React, { useState, useRef } from 'react';
import { View, PanResponder, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors } from "../config";

// Assuming these are your food items
const foods = ['Chicken Masala', 'Cheeseburger', 'Penne Pasta'];

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ece4e5', // Example background color
    width: 165,
    height: 165,
    borderRadius: 25,
    padding: 20,
  },
  infoContainer: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 18,
    width: '100%',
    textAlign: 'left',
    fontWeight: 'bold',
    color: Colors.font,
  },
  dots: {
    width: '100%',
  },
  indicatorDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: 'gray'
  },
  activeIndicatorDot: {
  //  ...StyleSheet.flatten(styles.indicatorDot),
    backgroundColor: 'black', // Change color to indicate selection
  },
  review: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: '600',
    color: '#4e4a4b',
  },
  author: {
    fontSize: 11,
    color: Colors.gray,
    fontWeight: '600',
    marginTop: 5,
  },
  star: {
    color: Colors.gray,
    fontSize: 9,
  },
});

export const MenuPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFoodIndex, setSelectedFoodIndex] = useState(0); // New state for tracking selected food
  const panRef = useRef(null);
  const threshold = 150
  const panHandlers = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx > threshold) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % foods.length);
      }
      if (gestureState.dx < (-1 * threshold)) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + foods.length) % foods.length);
      }
    },
    onPanResponderRelease: () => {
      setSelectedFoodIndex(currentIndex); // Update selected food index on release
    },
  });

  return (
    <>
      <View ref={panRef} style={styles.container} {...panHandlers.panHandlers}>
        <View style={styles.infoContainer}> 
          <Text style={styles.title}>{foods[currentIndex]}</Text>
          <Text style={styles.review}>"this is a review text example with less than 60 characters."</Text>
          <Text style={styles.author}>
            — DZ '28 • 1.7 {''}
            <Icon style={styles.star} name="star"></Icon>
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {foods.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => setCurrentIndex(index)}>
            <View
              style={[
                styles.indicatorDot,
                index === currentIndex? styles.activeIndicatorDot : null,
              ]}
            />
          </TouchableOpacity>
        ))}
        </View>
      </View>
    </>
  );
};