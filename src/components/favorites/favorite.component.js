import React, { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
`;

export const Favorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  return (
    <FavoriteButton>
      <AntDesign name="heart" size={26} color="red" />
    </FavoriteButton>
  );
};
