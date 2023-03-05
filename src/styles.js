import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  hoveredCheckBox: {
    "&:hover": {
      cursor: "pointer",
      color: "white",
      border: "3px solid black",
    },
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    width: "70%",
    maxHeight: "80vh",
    overflowY: "auto",
    margin: "auto",
  },
  centeredContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "2vh",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  leftButton: {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    border: "solid black",
    borderRadius: "10px",
    padding: "10px 20px",
    textDecoration: "none",
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
    borderRadius: "10px",
    padding: "10px 20px",
    textDecoration: "none",
    marginRight: "10%",

    "&:hover": {
      cursor: "pointer",
    },
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
  },
  avausNappiTeema: {
    fontWeight: "bold",
    border: "solid black",
    borderRadius: "10px",
    padding: "10px 20px",
    marginTop: "10vh",
    fontSize: "1.2rem",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.primary.main,
      color: "rgb(255, 255, 255)",
    },
  },
}));

export default useStyles;
