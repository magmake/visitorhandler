import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import themes from "../themes";
import Modal from "@material-ui/core/Modal";
import { tietosuojaseloste_teksti } from "./strings";
const { modalTheme } = themes;

const TermsOfService = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={modalTheme}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Tietosuojaseloste
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div>
          <h2>Your terms of service agreement</h2>
          <p>{tietosuojaseloste_teksti}</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </ThemeProvider>
  );
};

export default TermsOfService;
