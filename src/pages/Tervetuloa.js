import React, { useEffect, useState } from "react";
import chipslogo from "./media/chipstersfood_logo.png";
import baronslogo from "./media/baronsfood_logo.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Terms from "../components/Terms.js";
import { version } from "react";

import {
  TextBoxOtsikko,
  TextBoxTeksti,
  WrappedTextBoxesTheme,
} from "../components/Textbox";
import { tervetuloa_fin, tervetuloa2_fin } from "../components/strings";

// useStyles-tyylit
const useStyles = makeStyles(() => ({
  root: {
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    button: {
      backgroundColor: "rgb(0, 174, 239)",
      borderRadius: "6px",
      marginTop: "100px",
      minHeight: "auto",
      minWidth: "auto",
      width: "50%",
      height: "15vh",
      padding: "10px",
      fontSize: "3rem",
      "&:hover": {
        backgroundColor: "rgb(0, 174, 239)",
      },
    },
  },
}));
// etusivu, ohjeita yms.
const Tervetuloa = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const nappiTheme = useStyles();
  console.log(version);

  return (
    <div>
      <WrappedTextBoxesTheme>
        <TextBoxOtsikko text={tervetuloa_fin}></TextBoxOtsikko>
        <TextBoxTeksti text={tervetuloa2_fin}></TextBoxTeksti>
      </WrappedTextBoxesTheme>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img
            src={chipslogo}
            alt="chipslogo"
            style={{ width: "38%", maxWidth: "800px", marginTop: "10vh" }}
          />
        </div>
        <div style={{ width: "50%" }}>
          <img
            src={baronslogo}
            alt="baronslogo"
            style={{ width: "50%", maxWidth: "800px", marginTop: "10vh" }}
          />
        </div>

        <Terms open={open} handleClose={handleClose}></Terms>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={nappiTheme.button}
          onClick={handleOpen}
        >
          Sisään
        </Button>
      </div>
    </div>
  );
};

export default Tervetuloa;
