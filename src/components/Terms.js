import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import theme from "../themes";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import { tietosuojaseloste_teksti } from "./strings";
import useStyles from "../styles";

const TermsOfService = ({ handleClose, open }) => {
  const [isChecked, setIsChecked] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ onClick: (event) => event.stopPropagation() }}
      >
        <div className={classes.container}>
          <div className={classes.modalContent}>
            <h2>Tietosuojaseloste</h2>
            <p>{tietosuojaseloste_teksti}</p>
            <div>
              <div className={classes.centeredContainer}>
                <input
                  className={classes.hoveredCheckBox}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />

                <label>Hyväksyn ehdot</label>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                className={classes.leftButton}
                disabled={!isChecked}
              >
                <Link to="/lomake" className={classes.link}>
                  Hyväksyn ehdot
                </Link>
              </Button>
              <Button variant="contained" className={classes.rightButton}>
                <Link onClick={handleClose} className={classes.link}>
                  En hyväksy
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TermsOfService;
