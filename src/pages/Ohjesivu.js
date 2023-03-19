import React from "react";
import useStyles from "../styles";
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
const Ohjesivu = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.ohjeContainer2}>
        <TextBoxOtsikko text={ohjeita1_fin}></TextBoxOtsikko>
      </div>
      <div className={classes.ohjeContainer}>
        <TextBoxTeksti text={ohjeita2_fin}></TextBoxTeksti>
      </div>
      <TextBoxTeksti text={ohjeita3_fin}></TextBoxTeksti>
      <div className={classes.ohjeContainer}>
        <TextBoxTeksti text={ohjeita4_fin}></TextBoxTeksti>
      </div>
      <div className={classes.buttonContainer}>
        <div>
          <Link to="/lomake" className={classes.link}>
            <Button variant="contained" className={classes.avausNappiTeema}>
              Jatka
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/" className={classes.link}>
            <Button variant="contained" className={classes.avausNappiTeema}>
              Poistu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ohjesivu;
