import { Coords } from "google-map-react";

type PlaceProps = {
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  photo: {
    images: {
      small: {
        width: string;
        url: string;
        height: string;
      };
      thumbnail: {
        width: string;
        url: string;
        height: string;
      };
      original: {
        width: string;
        url: string;
        height: string;
      };
      large: {
        width: string;
        url: string;
        height: string;
      };
      medium: {
        width: string;
        url: string;
        height: string;
      };
    };
    is_blessed: boolean;
    uploaded_date: string;
    caption: string;
    id: string;
    helpful_votes: string;
    published_date: string;
    user: {
      user_id?: string;
      member_id: string;
      type: string;
    };
  };
  awards: [
    {
      award_type: string;
      categories: [];
      display_name: string;
      images: { large: string; small: string };
      year: string;
    }
  ];
  preferred_map_engine: string;
  autobroaden_type: string;
  autobroaden_label: string;
  raw_ranking: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking_category: string;
  ranking: string;
  subcategory_type: string;
  subcategory_type_label: string;
  distance: string;
  distance_string?: string;
  bearing: string;
  cuisine: [{ name: string }];
  rating: string;
  is_closed: false;
  is_long_closed: false;
  price_level: string;
  price: string;
  hotel_class: string;
  business_listings: {
    desktop_contacts: [];
    mobile_contacts: [];
  };
  special_offers: {
    desktop: [];
    mobile: [];
  };
  listing_key: string;
};

type PlacesDataProps = PlaceProps[];

type GetPlacesDataProps = {
  ne: Coords;
  sw: Coords;
};

export type { GetPlacesDataProps, PlaceProps, PlacesDataProps };
