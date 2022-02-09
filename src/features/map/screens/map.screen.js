import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const MapContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MapScreen = () => {
  return (
    <MapContainer>
      <Map />
    </MapContainer>
  );
};
