import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

// sisältää ohjelman teemat
const theme = createTheme({
  typography: {
    h1: {
      fontSize: 18,
      textAlign: "center",
    },
    h2: {
      fontSize: 10,
      textAlign: "center",
    },
    body1: {
      fontSize: 14,
      textAlign: "center",
    },
    subtitle1: {
      fontSize: 16,
      textAlign: "center",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(0, 174, 239)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5vh",
    textAlign: "center",
    color: "white",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
    maxHeight: "90%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0, 174, 239)",
    color: "white",
    "& h2": {
      margin: "0 0 10px 0",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  leftButton: {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    border: "solid black",
    borderRadius: "5px",
    padding: "10px 20px",
    marginLeft: "10%",
    "&:hover": {
      cursor: "pointer",
    },
    "&:disabled": {
      opacity: 0.2,
      cursor: "default",
    },
  },
  rightButton: {
    backgroundColor: "red",
    color: "white",
    border: "solid black",
    borderRadius: "5px",
    padding: "10px 20px",
    marginRight: "10%",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const themes = { theme, useStyles };

export default themes;
