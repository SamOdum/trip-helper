import { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { Bounds, Coords } from "google-map-react";
import { PlacesDataProps } from "./api/types";
import { useGetPlaces, useUserLocation } from "./hooks";

const App = () => {
  const initialCoords = {
    lat: 0,
    lng: 0,
  };

  const [places, setPlaces] = useState<PlacesDataProps>([]);
  const [coordinates, setCoordinates] = useState<Coords>(initialCoords);
  const [bounds, setBounds] = useState<Pick<Bounds, "ne" | "sw">>({
    ne: initialCoords,
    sw: initialCoords,
  });

  useUserLocation(setCoordinates);
  useGetPlaces(bounds, setPlaces);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",
          // paddingTop: "2rem",
          // height: "89vh",
          // overflowY: "clip",
        }}
      >
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
