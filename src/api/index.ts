import axios from "axios";
import { GetPlacesDataProps, PlacesDataProps } from "./types";

const Rapid_API_Key = process.env.React_APP_RAPID_API_KEY || "";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const getPlacesData = async ({
  ne,
  sw,
}: GetPlacesDataProps): Promise<PlacesDataProps> => {
  const options = {
    url: URL,
    params: {
      bl_latitude: sw.lat,
      bl_longitude: ne.lng,
      tr_longitude: sw.lng,
      tr_latitude: ne.lat,
      limit: "30",
      currency: "USD",
      subcategory: "hotel,bb,specialty",
      adults: "1",
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": Rapid_API_Key,
    },
  };

  let result;

  try {
    const { data } = await axios.request(options);
    result = data.data;
  } catch (error) {
    console.error(error);
  }

  return result;
};

export { getPlacesData };
