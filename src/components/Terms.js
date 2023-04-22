import React, { useState, useRef, useEffect } from "react";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import { tietosuojaseloste_teksti } from "./strings";
import useStyles from "../styles";
import messages from "../locales.js"; // tuodaan lokalisaatiotekstit
import { FormattedMessage } from "react-intl"; // formattedmessage, lokalisaatioon

const TermsOfService = ({ handleClose, open, locale }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const classes = useStyles();
    //input napin Ref. Otetaan checkbox pois, jos modali suljetaan.
    const inputRef = useRef(null);
    
    const handleModalClose = () => {
        handleClose();
        setIsChecked(false);
        setIsButtonDisabled(!isChecked);
        inputRef.current.checked = false;
    }
     
      const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        setIsButtonDisabled(!event.target.checked);
    }
 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalClose}
        BackdropProps={{ onClick: (event) => event.stopPropagation() }}
        >
        <div className={classes.container}>
          <div className={classes.modalContent}>
              <div className={classes.centeredContainer}>
            <div className={classes.modalOtsikko}><FormattedMessage id="ohjemodal_otsikko" defaultMEssage="Tietosuojaseloste"/></div>
                </div>
            <pre>{tietosuojaseloste_teksti}</pre>
            <div>
              <div className={classes.centeredContainer}>
                <input
                    ref={inputRef}
                  className={classes.hoveredCheckBox}
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />

                <label><FormattedMessage id="ohjemodal_hyväksy" defaultMEssage="Hyväksyn"/></label>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <Link to="/ohjesivu" className={classes.link}>
                <Button
                  variant="contained"
                  className={classes.leftButton}
                  disabled={!isChecked}
                >
                  <FormattedMessage id="ohjemodal_hyväksy" defaultMEssage="Hyväksyn"/>
                </Button>
              </Link>
              <Link onClick={handleClose} className={classes.link}>
                <Button variant="contained" className={classes.rightButton}>
                  <FormattedMessage id="ohjemodal_enhyväksy" defaultMEssage="En hyväksy"/>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TermsOfService;
