import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useHeaderStyle from "./HeaderStyle";
import { Autocomplete } from "@react-google-maps/api";
import { HeaderProps } from "./HeaderTypes";

const Header = ({ onLoad, onPlaceChanged }: HeaderProps) => {
  const { classes } = useHeaderStyle();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Trip Helper
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <IconButton aria-label="search icon">
                <SearchIcon className={classes.icon} />
              </IconButton>
              <InputBase
                aria-label="search"
                placeholder="Search..."
                classes={{ input: classes.inputInput }}
                style={{ color: "#fff" }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
