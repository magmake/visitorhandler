import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, Typography } from "@material-ui/core";
import themes from "../themes";
const { theme } = themes;

//otsikko
const TextBoxOtsikko = (props) => {
  return (
    <Typography variant="h1">
      <div>{props.text}</div>
    </Typography>
  );
};
//teksti
const TextBoxTeksti = (props) => {
  return (
    <Typography variant="subtitle1">
      <div>{props.text}</div>
    </Typography>
  );
};
//tarkistetaan, että propsit ovat string, eli tekstiä
TextBoxTeksti.propTypes = {
  text: PropTypes.string.isRequired,
};
TextBoxOtsikko.propTypes = {
  text: PropTypes.string.isRequired,
};

export { TextBoxOtsikko, TextBoxTeksti };
//siistimpänä wrapataan themeprovider-komponenttiin
export const ThemeWrappedTextBoxes = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
