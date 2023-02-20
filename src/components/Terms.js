import React, { useState } from "react";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import themes from "../themes";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import { tietosuojaseloste_teksti } from "./strings";

const TermsOfService = () => {
  // modalin state ja staten setOpen
  const [open, setOpen] = useState(false);
  const { modalTheme, useStyles } = themes;
  const nappi = useStyles();
  // käsittelijä modalille
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={modalTheme}>
      <Button
        variant="contained"
        color="primary"
        className={nappi.button}
        onClick={handleOpen}
      >
        Sisään
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        //Estetään modalin sulkeminen muualta kuin napista
        BackdropProps={{ onClick: (event) => event.stopPropagation() }}
      >
        <div>
          <h2>Tietosuojaseloste</h2>
          <p>{tietosuojaseloste_teksti}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              height: "50%",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="/" style={{ flex: 1 }}>
                <Button variant="contained" color="primary">
                  Etusivulle
                </Button>
              </Link>
              <Link to="/ohjesivu" style={{ flex: 1 }}>
                <Button variant="contained" color="primary">
                  Ohjesivulle
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </ThemeProvider>
  );
};

export default TermsOfService;
