import React, { useEffect } from "react";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  getFromLocalStorage,
  setToLocalStorage,
  saveStylesToLocalStorage,
} from "./localstorage";

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

const modalTheme = createTheme({
  overrides: {
    MuiModal: {
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    MuiGrid: {
      container: {
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#fff",
        border: "2px solid #000",
        boxShadow:
          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
        padding: "40px",
      },
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(0, 174, 239)",
    height: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    right: 0,
    paddingRight: "20px",
    textAlign: "right",
  },
  button: {
    fontSize: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: "40%",
  },
}));

const themes = { theme, modalTheme, useStyles };

export default themes;
