import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SearchContainer = styled(View)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
  padding: 10px;
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: 10px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search..." />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfoCard />
    </ListContainer>
  </SafeArea>
);
