import { Bounds, Coords } from "google-map-react";
import {
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getPlacesData } from "../api";
import { PlacesDataProps } from "../api/types";

const initialCoords = {
  lat: 0,
  lng: 0,
};

const useUserLocation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<Coords>(initialCoords);

  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        setLoading(false);
      }
    );
  }, [setCoordinates]);

  return { coordinates, loading, setCoordinates };
};

const useGetClickedChild = () => {
  const [childClicked, setChildClicked] = useState<number>();

  return { childClicked, setChildClicked };
};

const useGetPlaces = () => {
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [type, setType] = useState<string>("restaurants");
  const [places, setPlaces] = useState<PlacesDataProps>([]);
  const [childClicked, setChildClicked] = useState<number>();
  const [filteredPlaces, setFilteredPlaces] = useState<PlacesDataProps>([]);
  const [bounds, setBounds] = useState<Pick<Bounds, "ne" | "sw">>({
    ne: initialCoords,
    sw: initialCoords,
  });
  console.log({ rating });

  useEffect(() => {
    const arrayOfFiltered = places.filter(
      (place) => Number(place.rating) > rating
    );
    setFilteredPlaces(arrayOfFiltered);
    setChildClicked(0);
    console.log("setFilteredPlaces called!");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  useEffect(() => {
    setLoading(true);
    const apiPlaces = getPlacesData({
      ne: bounds.ne,
      sw: bounds.sw,
      type,
    });
    console.log("getPlacesData called!");

    apiPlaces.then((data) => {
      setPlaces(data);
      setFilteredPlaces([]);
      setRating(0);
      setChildClicked(0);
      setLoading(false);
    });
  }, [bounds, setPlaces, setLoading, type]);

  return {
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
  };
};

const useElementRefs = (arrOfInterest: {}[]) => {
  const [elementRefs, setElementRefs] = useState<RefObject<HTMLDivElement>[]>(
    []
  );

  useEffect(() => {
    const refs = Array(arrOfInterest?.length)
      .fill(createRef<HTMLDivElement>())
      .map((_, i) => elementRefs[i] || createRef<HTMLDivElement>());
    setElementRefs(refs);

    // DO NOT include elementRefs in the dependency array to
    // prevent an infinite render loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrOfInterest]);

  return elementRefs;
};

const useAutoComplete = (coordFn: Dispatch<SetStateAction<Coords>>) => {
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete>();

  const onLoad = (autoC: google.maps.places.Autocomplete) =>
    setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete?.getPlace()?.geometry?.location?.lat() || 0;
    const lng = autocomplete?.getPlace()?.geometry?.location?.lng() || 0;
    coordFn({ lat, lng });
  };

  return { onLoad, onPlaceChanged };
};

export {
  useAutoComplete,
  useElementRefs,
  useGetClickedChild,
  useGetPlaces,
  useUserLocation,
};
