import React, { Fragment } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes";

//yläpalkkiin liitettävä kello, joka päivittyy kerran sekunnissa
//määritellään yläpalkin teema käytettäväksi

// kellon päivitys 1000ms:n välein
const ClockBar = ({ dateTime }) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.primary.main }}>
        <Fragment>
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </Fragment>
      </div>
    </ThemeProvider>
  );
};

export default ClockBar;
