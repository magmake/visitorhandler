import { createTheme } from "@material-ui/core/styles";

// sisältää ohjelman teemat
const theme = createTheme({
  typography: {
    h1: {
      fontSize: 16,
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
      fontSize: 14,
      textAlign: "center",
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
