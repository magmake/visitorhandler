import React, { useState } from "react";
import useApi from "../api.js";
import messages from "../locales.js"; // tuodaan lokalisaatiotekstit
import { FormattedMessage } from "react-intl"; // formattedmessage, lokalisaatioon
import chipslogo from "./media/chipstersfood_logo.png";
import baronslogo from "./media/baronsfood_logo.png";
import Button from "@material-ui/core/Button";
import Terms from "../components/Terms.js";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes";
import useStyles from "../styles";
import { version } from "react";

// etusivu, ohjeita yms.
const Tervetuloa = (props) => {
    const { open, handleOpen, handleClose } = useApi();
    const { locale } = props;
    const classes = useStyles();

  return (
        <ThemeProvider theme={theme}>
            <div> 
      <div className={classes.etusivuTekstiContainer}>
            <div className={classes.etusivuTeksti}><FormattedMessage id="tervetuloa_otsikko" defaultMEssage="Otsikko"/></div>
            <div className={classes.etusivuTeksti}><FormattedMessage id="tervetuloa_info" defaultMEssage="Info"/></div>
      </div>
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
        <div className={classes.nappiContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            className={classes.nappiTeema}
          >
            <FormattedMessage id="tervetuloa_sisään" defaultMEssage="Sisään"/>
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Tervetuloa;
