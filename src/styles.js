import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //ohjesivu
  root: {
    width: "70%",
    marginTop: "1vh",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "1vh",
  },
  ohjeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "10vh",
  },
  ohjeContainer2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20vh",
  },
  hoveredCheckBox: {
    "&:hover": {
      cursor: "pointer",
      color: "white",
      border: "3px solid black",
    },
  },
  //tietolauseke
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
    margin: "20vh",
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
    marginRight: "10%",

    "&:hover": {
      cursor: "pointer",
    },
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
  },
  //etusivun avausnappi
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
  //lomake
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  field: {
    margin: "5px 0",
  },
  cancelButton: {
    position: "center",
    bottom: "-20vh",
    backgroundColor: "red",
    color: "white",
    border: "solid black",
    borderRadius: "10px",
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContainerLomake: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: theme.spacing(2),
  },
      valitseOtsikko: {
    fontSize: "1.2rem",
    fontWeight: 500,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  select: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  //hallinta
  datePickerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
    height: "5vh",
  },
  datePickerText: {
    margin: 0,
    marginBottom: "1rem",
  },
  hallintaPaper: {
    position: "absolute",
    alignItems: "center",
    width: "400px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  hallintaCard: {
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    width: "50%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    alignItems: "flex-start",
    loginButton: {
      marginTop: "1rem",
    },
  },
    hallintaCentered: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    hallintaLogin: {
    display: "flex",
    justifyContent: "space-between",
  },
    hallintaInput: {
    margin: "0 10px",
  },
  hallintaModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hallintaButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
      textDecoration: "none",
  },
}));

export default useStyles;
