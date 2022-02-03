import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info.components";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search..." />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    marginTop: StatusBar.currentHeight,
    padding: 20,
  },
  list: {
    flex: 1,
    padding: 20,
  },
});
