import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <SafeAreaProvider>
      <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
        <RestaurantStack.Screen
          name="Restaurants"
          component={RestaurantsScreen}
        />
        <RestaurantStack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
          options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
        />
      </RestaurantStack.Navigator>
    </SafeAreaProvider>
  );
};
