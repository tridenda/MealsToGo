import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.components";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="medium">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
