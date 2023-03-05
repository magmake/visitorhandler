import React, { Fragment, useState, useEffect, useMemo } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes";

//yläpalkkiin liitettävä kello, joka päivittyy kerran sekunnissa
//määritellään yläpalkin teema käytettäväksi

// kellon päivitys 1000ms:n välein
const ClockBar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 1000);
  }, []);
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
