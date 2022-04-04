import { HTMLAttributes, RefObject } from "react";
import { PlaceProps } from "../../api/types";
type PlaceDetailsProps = HTMLAttributes<HTMLDivElement> & {
  place: PlaceProps;
  selected: boolean;
  refProp: RefObject<HTMLDivElement>;
};

type PlaceDetailRef = (HTMLDivElement | RefObject<unknown>)[];

export type { PlaceDetailsProps, PlaceDetailRef };
