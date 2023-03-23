import React, { useState } from "react";
import useStyles from "../styles";
import messages from "../locales.js"; // tuodaan lokalisaatiotekstit
import { FormattedMessage } from "react-intl"; // formattedmessage, lokalisaatioon
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { TextBoxOtsikko, TextBoxTeksti } from "../components/Textbox";
import {
  ohjeita1_fin,
  ohjeita2_fin,
  ohjeita3_fin,
  ohjeita4_fin,
} from "../components/strings";

// etusivu, ohjeita yms.
const Ohjesivu = (props) => {
     const { locale } = props;
    const classes = useStyles();
    const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <div className={classes.ohjeContainer2}>
        <FormattedMessage id="ohjesivu_ohje1" defaultMEssage="Ohje1"/>
      </div>
      <div className={classes.ohjeContainer}>
        <FormattedMessage id="ohjesivu_ohje2" defaultMEssage="Ohje2"/>
      </div>
      <FormattedMessage id="ohjesivu_ohje3" defaultMEssage="Ohje3"/>
      <div className={classes.ohjeContainer}>
        <FormattedMessage id="ohjesivu_ohje4" defaultMEssage="Ohje4"/>
      </div>
      <div className={classes.centeredContainer}>
                <input
                  className={classes.hoveredCheckBox}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />

                <label><FormattedMessage id="ohjesivu_olenlukenut" defaultMEssage="Olen lukenut ohjeet"/></label>
              </div>
      <div className={classes.buttonContainer}>
        <div>
          <Link to="/lomake" className={classes.link}>
            <Button variant="contained" className={classes.avausNappiTeema} disabled={!isChecked}>
              <FormattedMessage id="ohjesivu_jatka" defaultMEssage="Jatka"/>
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/" className={classes.link}>
            <Button variant="contained" className={classes.avausNappiTeema}>
              <FormattedMessage id="ohjesivu_poistu" defaultMEssage="Jatka"/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ohjesivu;
