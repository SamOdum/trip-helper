import { Bounds, Coords } from "google-map-react";
import { PlaceProps, PlacesDataProps } from "../../api/types";

type MapProps = {
  coordinates?: Coords;
  setCoordinates: ({ lat, lng }: Coords) => void;
  setBounds: ({ ne, sw }: Pick<Bounds, "ne" | "sw">) => void;
  places: PlacesDataProps;
};

type MarkerProps = { place: PlaceProps; lat: number; lng: number };

export type { MapProps, MarkerProps };
