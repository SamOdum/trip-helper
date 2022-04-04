import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { useAutoComplete, useGetPlaces, useUserLocation } from "./hooks";

const App = () => {
  const { coordinates, setCoordinates } = useUserLocation();
  const { onLoad, onPlaceChanged } = useAutoComplete(setCoordinates);
  const {
    type,
    places,
    rating,
    loading,
    childClicked,
    filteredPlaces,
    setType,
    setRating,
    setBounds,
    setChildClicked,
  } = useGetPlaces();

  return (
    <>
      <CssBaseline />
      <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged} />
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",
          paddingTop: "2rem",
          height: "89vh",
        }}
      >
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length > 0 ? filteredPlaces : places}
            childClicked={childClicked}
            loading={loading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={filteredPlaces.length > 0 ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
