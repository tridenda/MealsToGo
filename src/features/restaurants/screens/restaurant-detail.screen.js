import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [launchExpanded, setLaunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => (
            <List.Icon
              {...props}
              icon="bread-slice"
              expanded={breakfastExpanded}
              onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            />
          )}
        >
          <List.Item title="Ham and Swiss" />
          <List.Item title="Ham and Egg" />
        </List.Accordion>

        <List.Accordion
          title="Launch"
          left={(props) => (
            <List.Icon
              {...props}
              icon="hamburger"
              expanded={launchExpanded}
              onPress={() => setLaunchExpanded(!launchExpanded)}
            />
          )}
        >
          <List.Item title="BBG and Cheese" />
          <List.Item title="Turkey and Roasted" />
          <List.Item title="Combination" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon
              {...props}
              icon="food-variant"
              expanded={dinnerExpanded}
              onPress={() => setDinnerExpanded(!dinnerExpanded)}
            />
          )}
        >
          <List.Item title="Royal Waffle" />
          <List.Item title="Original Waffle" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => (
            <List.Icon
              {...props}
              icon="cup"
              expanded={drinksExpanded}
              onPress={() => setDrinksExpanded(!drinksExpanded)}
            />
          )}
        >
          <List.Item title="Green Tea" />
          <List.Item title="Coffee" />
          <List.Item title="Milk Tea" />
          <List.Item title="Tomato Juice" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
