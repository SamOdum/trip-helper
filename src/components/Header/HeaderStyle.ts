import { alpha, Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { colors } from "../../variables";

const useHeaderStyle = makeStyles()((theme: Theme) => {
  return {
    header: {
      backgroundColor: colors.priBrand,
    },
    title: {},
    byline: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(colors.whiteBrand, 0.15),
      "&:hover": { backgroundColor: alpha(colors.whiteBrand, 0.25) },
      marginLeft: 0,
      width: "150px",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
      display: "flex",
      alignItems: "center",
    },
    icon: {
      color: "#fff",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: { width: "20ch" },
      color: "#fff",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
});

export default useHeaderStyle;
