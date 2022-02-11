import React, { useContext } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigation";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppNavigator />
      ) : (
        <View style={{ paddingTop: 20 }}>
          <Text>Not authenticated</Text>
        </View>
      )}
    </NavigationContainer>
  );
};
