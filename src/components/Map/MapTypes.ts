import { Bounds, Coords } from "google-map-react";
import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { PlaceProps, PlacesDataProps } from "../../api/types";

type MapProps = {
  coordinates: Coords;
  setCoordinates: Dispatch<SetStateAction<Coords>>;
  setBounds: ({ ne, sw }: Pick<Bounds, "ne" | "sw">) => void;
  places: PlacesDataProps;
  setChildClicked: (id: number) => void;
};

type MarkerProps = HTMLAttributes<HTMLDivElement> & {
  place: PlaceProps;
  lat: number;
  lng: number;
};

export type { MapProps, MarkerProps };
