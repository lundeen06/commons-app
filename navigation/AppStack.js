import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "../screens/HomeScreen";
import { MapScreen } from "../screens/MapScreen";
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
        screenOptions={{ animation: 'none' }}
      />
      <Stack.Screen 
        name="Map" 
        component={MapScreen} 
        options={{
          headerLeft: () => null, // Remove the back button
        }}
        screenOptions={{ animation: 'none' }}
      />
      <Stack.Screen 
        name="Menu" 
        component={MenuScreen} 
        options={{
          headerLeft: () => null, // Remove the back button
        }}
        screenOptions={{ animation: 'none' }}
      />
      <Stack.Screen 
        name="Community" 
        component={CommunityScreen} 
        options={{
          headerLeft: () => null, // Remove the back button
        }}
        screenOptions={{ animation: 'none' }}
      />
    </Stack.Navigator>
  );
};
