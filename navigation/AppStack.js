import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { MapScreen } from "../screens/MapScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { MenuScreen } from "../screens/MenuScreen";
import { CommunityScreen } from "../screens/CommunityScreen";
import { Footer } from '../components/Footer'; // Adjust the import path as necessary

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerLeft: () => null, // Remove the back button
        }}
      />
      <Stack.Screen 
        name="Map" 
        component={MapScreen} 
        options={{
          headerLeft: () => null, // Remove the back button
        }}
      />
      <Stack.Screen 
        name="Menu" 
        component={MenuScreen} 
        options={{
          headerLeft: () => null, // Remove the back button
        }}
      />
      <Stack.Screen 
        name="Community" 
        component={CommunityScreen} 
        options={{
          headerLeft: () => null, // Remove the back button
        }}
      />
    </Stack.Navigator>
  );
};
