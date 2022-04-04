import { PlacesDataProps } from "../../api/types";

type ListProps = {
  places: PlacesDataProps;
  childClicked: any;
  loading: boolean;
  type: string;
  setType: (text: string) => void;
  rating: number;
  setRating: (text: number) => void;
};

export type { ListProps };
