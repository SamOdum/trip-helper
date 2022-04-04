import { Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { LocationOn } from "@mui/icons-material";
import useMapStyles from "./MapStyle";
import { MapProps, MarkerProps } from "./MapTypes";

const Marker = ({ place, lat, lng }: MarkerProps) => {
  const { classes } = useMapStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={classes.markerContainer}>
      {isMobile ? (
        <LocationOn color="primary" fontSize="large" />
      ) : (
        <Paper elevation={3} className={classes.paper}>
          <Typography className="" variant="subtitle2" gutterBottom>
            {place.name}
          </Typography>
          <img
            className={classes.img}
            src={
              place.photo
                ? place.photo.images.small.url
                : "./trip-helper-substitue-img.jpg"
            }
            alt={place.name}
          />

          <Rating
            name="read-only"
            size="small"
            value={Number(place.rating)}
            readOnly
          />
        </Paper>
      )}
    </div>
  );
};

const Google_Map_Key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}: MapProps) => {
  const { classes } = useMapStyles();

  const defaultProps = {
    center: {
      lat: 5.1216,
      lng: 7.3733,
    },
    zoom: 14,
  };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: Google_Map_Key,
        }}
        defaultZoom={defaultProps.zoom}
        defaultCenter={defaultProps.center}
        center={coordinates}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(Number(child))}
      >
        {places?.map((place, i) => (
          <Marker
            key={i}
            place={place}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
