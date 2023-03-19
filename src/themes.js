import { createTheme } from "@material-ui/core/styles";

// sisältää ohjelman teemat
const theme = createTheme({
  typography: {
    h1: {
      fontSize: 16,
      textAlign: "center",
      margin: "1px 0",
    },
    h2: {
      fontSize: 12,
      textAlign: "center",
      margin: "16px 0",
    },
    h5: {
      fontSize: 35,
      textAlign: "center",
      margin: "16px 0px",
    },
    body1: {
      fontSize: 14,
      textAlign: "center",
      margin: "16px 0",
    },
    subtitle1: {
      fontSize: 30,
      textAlign: "center",
      margin: "20px 50px",
    },
    fontFamily: "Arial, sans-serif",
  },
  palette: {
    //Pantone Process Cyan C
    primary: {
      main: "rgb(0, 174, 239)",
    },
    // Pantone 288 C
    secondary: {
      main: "rgb(0, 51, 153)",
    },
  },
});

export default theme;
