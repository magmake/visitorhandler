import React, { useState } from "react";
import enFlag from "./media/United_Kingdom.jpg"
import seFlag from "./media/Sweden.jpg"
import fiFlag from "./media/Finland.jpg"
import useStyles from "../styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl"; // formattedmessage, lokalisaatioon


const Kielivalinta = ({changeLocale, locale}) => {
    const classes = useStyles();
    const [isHoveredfi, setIsHoveredfi] = useState(false);
    const [isHovereden, setIsHovereden] = useState(false);
    const [isHoveredsv, setIsHoveredsv] = useState(false);

  return (
    <div className={classes.kieliSivuContainer}>
      <div className={classes.kieliSivuOtsikko}>Valitse kieli</div>
      <div>
        <img
          src={fiFlag}
          alt="Suomi"
      onMouseEnter={() => setIsHoveredfi(true)}
      onMouseLeave={() => setIsHoveredfi(false)}
          onClick={() => changeLocale("fi")}
            style={{ width: "200px", height: "100px", filter: locale === "fi" ? "brightness(100%)" : "brightness(60%)", border: isHoveredfi ? "2px solid green" : "none", margin: "10px", }}

        />
        <img
          src={enFlag}
          alt="English"
onMouseEnter={() => setIsHovereden(true)}
      onMouseLeave={() => setIsHovereden(false)}
          onClick={() => changeLocale("en")}
        style={{ width: "200px", height: "100px", filter: locale === "en" ? "brightness(100%)" : "brightness(60%)", border: isHoveredsv ? "2px solid green" : "none", margin: "10px", }}

        />
        <img
          src={seFlag}
          alt="Svenska"
onMouseEnter={() => setIsHoveredsv(true)}
      onMouseLeave={() => setIsHoveredsv(false)}
          onClick={() => changeLocale("sv")}
            style={{ width: "200px", height: "100px", filter: locale === "sv" ? "brightness(100%)" : "brightness(60%)", border: isHovereden ? "2px solid green" : "none", margin: "10px", }}

        />
      </div>
        <div>
          <Link to="/tervetuloa" className={classes.link}>
            <Button variant="contained" className={classes.nappiTeema}>
              <FormattedMessage id="kielivalinta_ok" defaultMEssage="Valinta ok"/>
            </Button>
          </Link>
        </div>
    </div>

  );
};

export default Kielivalinta;