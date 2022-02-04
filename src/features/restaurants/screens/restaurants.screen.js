import React from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/untility/safe-area.component";

const SearchContainer = styled(View)`
  padding: 10px;
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: 10px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search..." />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="medium">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
