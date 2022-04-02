import { Bounds } from "google-map-react";
import { useEffect } from "react";
import { getPlacesData } from "../api";
import { PlacesDataProps } from "../api/types";

type LocationCoordProps = {
  lat: number;
  lng: number;
};

const useUserLocation = (fn: ({ lat, lng }: LocationCoordProps) => void) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        fn({ lat: latitude, lng: longitude })
    );
  }, [fn]);
};

const useGetPlaces = (
  bounds: Pick<Bounds, "ne" | "sw">,
  fn: (data: PlacesDataProps) => void
) => {
  useEffect(() => {
    const apiPlaces = getPlacesData({ ne: bounds.ne, sw: bounds.sw });
    apiPlaces.then((data) => fn(data));
  }, [bounds, fn]);
};

export { useUserLocation, useGetPlaces };
