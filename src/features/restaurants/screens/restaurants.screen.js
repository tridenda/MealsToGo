import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const SearchContainer = styled(View)`
  margin-top: ${StatusBar.currentHeight};
  padding: 10px;
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: 10px;
`;

export const RestaurantsScreen = () => (
  <Container>
    <SearchContainer>
      <Searchbar placeholder="Search..." />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfoCard />
    </ListContainer>
  </Container>
);
