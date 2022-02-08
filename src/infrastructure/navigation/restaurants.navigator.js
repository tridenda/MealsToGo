import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <SafeAreaProvider>
      <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
        <RestaurantStack.Screen
          name="Restaurants1"
          component={RestaurantsScreen}
        />
      </RestaurantStack.Navigator>
    </SafeAreaProvider>
  );
};
