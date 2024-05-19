import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, MapScreen } from "../screens";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="dev-home" component={HomeScreen} /> */}
      <Stack.Screen name="dev-home" component={MapScreen} />
    </Stack.Navigator>
  );
};