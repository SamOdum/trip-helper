import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useListStyles from "./ListStyle";
import { ListProps } from "./ListTypes";
import { useElementRefs } from "../../hooks";

const List = ({
  places,
  childClicked,
  loading,
  rating,
  setRating,
  type,
  setType,
}: ListProps) => {
  const { classes } = useListStyles();

  const elementRefs = useElementRefs(places);

  return (
    <div className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Hotels, Restaurants & Attractions around you
      </Typography>

      <>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
        {loading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" color="primary" />
          </div>
        ) : (
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid
                item
                key={i}
                xs={12}
                style={{ paddingTop: 0, marginBottom: "24px" }}
              >
                <PlaceDetails
                  key={i}
                  place={place}
                  selected={childClicked === i}
                  refProp={elementRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </>
    </div>
  );
};

export default List;
