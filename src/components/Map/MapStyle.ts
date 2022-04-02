import { makeStyles } from "tss-react/mui";

const useMapStyles = makeStyles()(() => ({
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "110px",
  },
  mapContainer: {
    height: "85vh",
    width: "100%",
    paddingRight: "25px",
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
