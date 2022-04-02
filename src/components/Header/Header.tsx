import React from "react";
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

const Header = () => {
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
