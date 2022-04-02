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
  list: {
    height: "75vh",
    overflow: "auto",
  },
}));

export default useListStyles;
