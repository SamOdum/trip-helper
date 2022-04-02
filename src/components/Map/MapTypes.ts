import { Bounds, Coords } from "google-map-react";

export type MapProps = {
  coordinates?: Coords;
  setCoordinates: ({ lat, lng }: Coords) => void;
  setBounds: ({ ne, sw }: Pick<Bounds, "ne" | "sw">) => void;
};
