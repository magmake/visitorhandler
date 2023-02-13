import React, { Fragment, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

// kellon päivitys 1000ms:n välein
const ClockBar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 1000);
  }, []);
  return (
    <Fragment>
      <Typography
        variant="body1"
        style={{
          textAlign: "right",
          backgroundColor: "lightgray",
          padding: "20px",
        }}
      >
        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
      </Typography>
    </Fragment>
  );
};

export default ClockBar;
