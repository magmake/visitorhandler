import React, { useState } from "react";
import chipslogo from "./media/chipstersfood_logo.png";
import baronslogo from "./media/baronsfood_logo.png";
import Button from "@material-ui/core/Button";
import Terms from "../components/Terms.js";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes";
import useStyles from "../styles";
import { version } from "react";

import { TextBoxOtsikko, TextBoxTeksti } from "../components/Textbox";
import { tervetuloa_fin, tervetuloa2_fin } from "../components/strings";

// useStyles-tyylit

// etusivu, ohjeita yms.
const Tervetuloa = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  console.log(version);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <TextBoxOtsikko text={tervetuloa_fin}></TextBoxOtsikko>
        <TextBoxTeksti text={tervetuloa2_fin}></TextBoxTeksti>
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
            onClick={handleOpen}
            className={classes.avausNappiTeema}
          >
            Sisään
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Tervetuloa;
