import { Theme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

const useListStyles = makeStyles()((theme: Theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    padding: "25px",
    paddingTop: 0,
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
  },
}));

export default useListStyles;
