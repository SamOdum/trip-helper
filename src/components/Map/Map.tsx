import GoogleMapReact from "google-map-react";
import useMapStyles from "./MapStyle";
import { MapProps } from "./MapTypes";

const Google_Map_Key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

const Map = ({ coordinates, setCoordinates, setBounds }: MapProps) => {
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
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
