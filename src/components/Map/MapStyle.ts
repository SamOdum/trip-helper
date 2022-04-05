import { Theme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

const useMapStyles = makeStyles()((theme: Theme) => ({
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "110px",
  },
  mapContainer: {
    // height: "85vh",
    width: "100%",
    paddingRight: "25px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "25px",
      marginBottom: "24px",
    },
  },
  mapParent: {
    backgroundColor: "red",
    height: "84.8vh",
    [theme.breakpoints.up("xl")]: { height: "80.3vh" },
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  img: {
    cursor: "pointer",
  },
  typograpgy: {
    fontSize: "14px",
  },
}));

export default useMapStyles;
