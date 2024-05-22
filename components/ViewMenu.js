import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Images, Colors, auth } from "../config";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: Colors.white, // Ensure this color is defined in your Colors object
    width: 165,
    height: 75,
    borderRadius: 30,
    borderColor: Colors.lightGray,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  mainText: {
    color: Colors.darkGray,
    fontSize: 18,
    fontWeight: '600',
  }, 
  description: {
    color: Colors.gray,
    fontSize: 10,
  },
  icon: {
    color: Colors.darkGreen,
    fontSize: 12,
    fontWeight: '600',
  },
});

export const ViewMenu = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Dining')}>
      <View style={styles.container}>
          <Text style={styles.mainText}>View Menu{' '}
            {/* <Icon name="chevron-forward-outline" style={styles.icon} /> */}
          </Text>
          <Text style={styles.description}>menu, hours, and more</Text>
      </View>
    </TouchableOpacity>
  );
};