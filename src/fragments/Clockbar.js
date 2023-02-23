import React, { Fragment, useState, useEffect } from "react";
import themes from "../themes";

//määritellään yläpalkin teema käytettäväksi

// kellon päivitys 1000ms:n välein
const ClockBar = () => {
  const kelloTheme = themes.useStyles();
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 1000);
  }, []);
  return (
    <div className={kelloTheme.root}>
      <Fragment>
        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
      </Fragment>
    </div>
  );
};

export default ClockBar;
