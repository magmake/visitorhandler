import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    width: "50%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    alignItems: "flex-start",
    loginButton: {
      marginTop: "1rem",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    alignItems: "center",
    width: "400px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const Hallinta = () => {
  const [data, setData] = useState([]);
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

  const handleLogin = () => {
    // Tässä voit tarkistaa käyttäjätunnuksen ja salasanan ja asettaa loggedIn-muuttujan true/false
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
          {data.map((item) => (
            <Card key={item.uniqueId} className={classes.card}>
              <CardContent>
                <h2>{item.name} </h2>
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

      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
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
