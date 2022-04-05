import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import { LocationOn, Phone } from "@mui/icons-material";

import usePlaceDetailsStyles from "./PlaceDetailStyle";
import { PlaceDetailsProps } from "./PlaceDetailTypes";

const PlaceDetails = ({ place, selected, refProp }: PlaceDetailsProps) => {
  const { classes } = usePlaceDetailsStyles();

  if (selected)
    refProp?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const handleBtnClick = (url: string) => window.open(url, "blank");

  return (
    <Card elevation={6} ref={refProp}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "./trip-helper-substitue-img.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            Out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price}
          </Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOn />
            {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <Phone />
            {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleBtnClick(place.web_url)}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => handleBtnClick(place.website)}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
