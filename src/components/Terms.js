import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import themes from "../themes";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import { tietosuojaseloste_teksti } from "./strings";

const TermsOfService = ({ handleClose, open }) => {
  const [isChecked, setIsChecked] = useState(false);
  // modalin state ja staten setOpen
  const modalTyylit = themes.useStyles({
    backgroundColor: isChecked ? "green" : "red",
  });

  // käsittelijä modalille

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ onClick: (event) => event.stopPropagation() }}
      >
        <div className={modalTyylit.modal}>
          <div className={modalTyylit.paper}>
            <h2>Tietosuojaseloste</h2>
            <p>{tietosuojaseloste_teksti}</p>
            <div className={modalTyylit.checkboxContainer}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label>Hyväksyn ehdot</label>
            </div>
            <div className={modalTyylit.buttonContainer}>
              <Button className={modalTyylit.leftButton} disabled={!isChecked}>
                <Link to="/lomake">Hyväksyn ehdot</Link>
              </Button>
              <Button className={modalTyylit.rightButton} variant="contained">
                <Link onClick={handleClose}>En hyväksy</Link>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TermsOfService;
