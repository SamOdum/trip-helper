import { Theme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import { colors } from "../../variables";

const useListStyles = makeStyles()((theme: Theme) => ({
  input: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
    color: colors.priBrand,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    padding: "25px",
    paddingTop: 0,
    paddingBottom: 0,
  },
  select: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  heading: {
    fontWeight: "600",
    color: colors.priBrand,
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "25vh",
  },
  list: {
    height: "65vh",
    overflow: "auto",
    marginTop: 0,
    marginBottom: "24px",
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
      height: "64vh",
    },
  },
}));

export default useListStyles;
