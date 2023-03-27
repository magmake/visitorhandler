import React, { useState, useEffect } from "react";
import useApi from "../api.js";
import { apiUrl } from "../components/misc.js"
import { Button, Modal, Card, CardContent } from "@material-ui/core";
import useStyles from "../styles";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Hallinta = () => {
    const { open, handleOpen, handleClose, fetchData } = useApi();
    const [data, setData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
    
    useEffect(() => {
    const getData = async () => {
      const jsonData = await fetchData(apiUrl + "/data");
      if (jsonData) {
        setData(jsonData);
      }
    };
    getData();
  }, []);

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
    <div className={classes.hallintaCentered}>
      <h1>Hallintapaneeli</h1>
      

  <div className={classes.hallintaButton}>
    <Link to="/" className={classes.link}>
      <Button variant="contained" color="secondary" className={classes.hallintaButton}>
        Poistu
      </Button>
    </Link>
  </div>

        {loggedIn ? (
        
      <div className={classes.hallintaCentered}>
          <div className={classes.datePickerContainer}>
            <div className={classes.datePickerText}>valitse päivämäärä</div>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd.MM.yyyy"
            />
          </div>
      <div className={classes.hallintaCentered}>
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
</div>
      ) : (
        <div>
          <div>
            <h2>Kirjaudu sisään nähdäksesi tiedot</h2>
          </div>

          <div className={classes.hallintaButton}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Login
            </Button>
          </div>
        </div>
      )}

      <Modal
        className={classes.hallintaModal}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.hallintaPaper}>
          <div className={classes.hallintaCentered}>
            <h2>Kirjaudu hallintapaneeliin</h2>
          </div>
          <div className={classes.hallintaCentered}>
            <p>Syötä käyttäjätiedot</p>
          </div>
          <div className={classes.hallintaLogin}>
            <div className={classes.hallintaInput}>
              <input
                type="text"
                placeholder="Käyttäjänimi"
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "80%",
                  boxSizing: "border-box",
                  padding: "8px 16px",
                }}
              />
            </div>
            <div className={classes.hallintaInput}>
              <input
                type="password"
                placeholder="Salasana"
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "80%",
                  boxSizing: "border-box",
                  padding: "8px 16px",
                }}
              />
            </div>
          </div>
          <br />
          <div className={classes.hallintaButton}>
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Kirjaudu hallintapaneeliin
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hallinta;
