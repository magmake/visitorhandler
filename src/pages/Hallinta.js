import React, { useState, useEffect } from "react";
import { Button, Modal, Card, CardContent } from "@material-ui/core";
import useStyles from "../styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Hallinta = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:443/data");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //datepickerin handler
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // määritetään dateformat täsmäämään käyttätiedon kanssa
  const dateFormat = "dd.MM.yyyy";
  // käydään läpi kaikki tiedostot
  const filteredData = data.filter((item) => {
    if (selectedDate) {
      // verrataan tiedoston date ja datepickerin date, jos sama, niin valitaan ne tiedot
      const formattedDate = format(selectedDate, dateFormat);
      return item.date === formattedDate;
    }
    return true;
  });

  const handleLogin = () => {
    // Hallintapaneelin salasana. Määrittää loggedIn-muuttujan true/false
    if (username === "käyttäjä" && password === "salasana") {
      setLoggedIn(true);
      handleClose();
    } else {
      alert("Väärä käyttäjätunnus tai salasana");
    }
  };
  return (
    <div>
      <h1>Hallintapaneeli</h1>

      {loggedIn ? (
        <div>
          <div className={classes.datePickerContainer}>
            <p className={classes.datePickerText}>valitse päivämäärä</p>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd.MM.yyyy"
            />
          </div>
          {filteredData.map((item) => (
            <Card key={item.uniqueId} className={classes.hallintaCard}>
              <CardContent>
                <h2>{item.name} </h2>
                <p>Id: {item.uniqueId}</p>
                <p>Etunimi: {item.etunimi} </p>
                <p>Sukunimi: {item.sukunimi} </p>
                <p>Yritys: {item.yritys} </p>
                <p>Puhelinnumero: {item.puhelinnumero} </p>
                <p>Email: {item.email}</p>
                <p>Vastuuhenkilö: {item.vastuuhenkilo} </p>
                <p>Kirjautumisaika: {item.time} </p>
                <p>Kirjautumispäivä: {item.date} </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <div>
            <h2>Kirjaudu sisään nähdäksesi tiedot</h2>
          </div>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Login
          </Button>
        </div>
      )}

      <Modal
        className={classes.hallintaModal}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.hallintaPaper}>
          <h2>Kirjaudu hallintapaneeliin</h2>
          <p>Syötä käyttäjätiedot</p>
          <input
            type="text"
            placeholder="Käyttäjänimi"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Salasana"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Kirjaudu hallintapaneeliin
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Hallinta;
