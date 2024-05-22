import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "../screens/HomeScreen";
import { MapScreen } from "../screens/MapScreen";

import { DiningScreen } from "../screens/DiningScreen";
import { MenuScreen } from "../screens/MenuScreen";

import { CommunityScreen } from "../screens/CommunityScreen";

// oh you get the name? explain it. fyph. (for your pie hole)
// foodbook. we out here getting sued with this one!!! 
// menuer
// bld (breakfast, lunch, dinner)
// tree-eats --> tr eats
// mc'evs --> mc evil?
// hungr
// food nav
// navr say avar
// maccr
// flaccr
// slaccr
// paccr
// yakr
// dakr
// tackr
// phlackr
// happr
// yappr
// wafflr
// trufflr
// triflr
// bitemarks --> bitemarx
// feastr
// jar jar banks
// culinaryizer
// the dish 
// plate bull
// plurpl
// merkel
// smirkl
// murpl
// hurpl
// knifr
// loonr
// new forker
// containr
// complainer
// gummer
// phood
// it all goes to sh*t anyway
// cornucopia


const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false, // Disable animation for all screens
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerTitle: '',
          headerLeft: () => null, // Remove the back button
          headerStyle: {
            borderBottomWidth: 0, // Removes the bottom border
            shadowOffset: { height: 0 }, // Adjusts the shadow offset to remove the shadow effect
          },
          headerShown: true,
        }}
      />
      <Stack.Screen 
        name="Map" 
        component={MapScreen} 
        options={{
          headerTitle: '',
          headerLeft: () => null, // Remove the back button
          headerStyle: {
            borderBottomWidth: 0, // Removes the bottom border
            shadowOffset: { height: 0 }, // Adjusts the shadow offset to remove the shadow effect
          },  
        }}
      />
      <Stack.Screen 
        name="Dining" 
        component={DiningScreen} 
        options={{
          headerTitle: '',
          headerLeft: () => null, // Remove the back button
          headerStyle: {
            borderBottomWidth: 0, // Removes the bottom border
            shadowOffset: { height: 0 }, // Adjusts the shadow offset to remove the shadow effect
          },  
        }}
      />
      <Stack.Screen 
        name="Community" 
        component={CommunityScreen} 
        options={{
          headerTitle: '',
          headerLeft: () => null, // Remove the back button
          headerStyle: {
            borderBottomWidth: 0, // Removes the bottom border
            shadowOffset: { height: 0 }, // Adjusts the shadow offset to remove the shadow effect
          },  
        }}
      />
      <Stack.Screen 
        name="Menu" 
        component={MenuScreen} 
        options={{
          headerTitle: '',
          headerLeft: () => null,
          headerStyle: {
            borderBottomWidth: 0, // Removes the bottom border
            shadowOffset: { height: 0 }, // Adjusts the shadow offset to remove the shadow effect
          },  
        }}
      />
    </Stack.Navigator>
  );
};
