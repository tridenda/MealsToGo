import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -15px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} color={Colors.orange300} />
        </LoadingContainer>
      )}
      <SafeAreaView>
        <Search
          isFavoritesToggled={isToggled}
          onFavoritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavoritesBar
            favorites={favorites}
            onNavigate={navigation.navigate}
          />
        )}
        <RestaurantList
          data={restaurants}
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
      </SafeAreaView>
    </>
  );
};
