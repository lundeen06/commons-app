import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "../screens/HomeScreen";
import { MapScreen } from "../screens/MapScreen";
import { MenuScreen } from "../screens/MenuScreen";
import { CommunityScreen } from "../screens/CommunityScreen";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false, // Disable animation for all screens
      }}
    >
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
