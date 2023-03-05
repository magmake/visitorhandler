import React, { useState } from "react";
import { TextField, Select, MenuItem, Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import {
  TextBoxOtsikko,
  TextBoxTeksti,
  WrappedTextBoxesTheme,
} from "../components/Textbox";
import { lomakeOtsikko } from "../components/strings";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// lomakkeelle tyylittelyä
const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
  },
  field: {
    margin: "10px 0",
  },
  cancelButton: {
    position: "fixed",
    bottom: "10%",
    left: "10%",
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

// etusivu, ohjeita yms.
const Lomake = () => {
  // lomakkeen tiedot
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [yritys, setYritys] = useState("");
  const [email, setEmail] = useState("");
  const [puhelinnumero, setPuhelinnumero] = useState("");
  const [vastuuhenkilo, setVastuuhenkilo] = useState("");
  const [open, setOpen] = useState(false);
  const [omaVastuuhenkilo, setOmavastuuhenkilo] = useState("");

  //tyylit
  const classes = useStyles();
  //navigointi sivustolla
  const history = useNavigate();

  //avataan modal, jos peruutetaan lomakkeen täyttö
  const handleCancel = () => {
    setOpen(true);
  };

  // suljetaan peruuta-ikkuna
  const handleCloseModal = () => {
    setOpen(false);
  };

  //varmistetaan, haluaako käyttäjä peruuttaa -> palataan etusivulle
  const handleConfirmCancel = () => {
    setOpen(false);
    history("/");
  };
  // jos vastaanottavaa henkilöä ei löydy alasvetovalikosta, voi määritellä itse
  const handleChange = (event) => {
    if (event.target.value === "Muu") {
      setOpen(true);
    } else {
      setOpen(false);
      setVastuuhenkilo(event.target.value);
    }
  };

  const handleOmavastuuhenkiloBlur = () => {
    setVastuuhenkilo(omaVastuuhenkilo);
    setOpen(false);
  };
  const handleOmaVastuuhenkiloChange = (event) => {
    setOmavastuuhenkilo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tiedot = {
      etunimi,
      sukunimi,
      yritys,
      email,
      puhelinnumero,
      vastuuhenkilo,
    };
    const jsonTiedot = `${etunimi}_${sukunimi}_${email}`;
    const formData = new FormData();
    formData.append("tiedot", JSON.stringify(tiedot, null, 2));
    formData.append("jsonNimi", jsonTiedot);

    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      const data = await response.json();
      console.log("SENDER DATA: ", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <WrappedTextBoxesTheme>
        <TextBoxOtsikko text={lomakeOtsikko}></TextBoxOtsikko>
      </WrappedTextBoxesTheme>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Etunimi"
          className={classes.field}
          value={etunimi}
          onChange={(event) => setEtunimi(event.target.value)}
        />
        <TextField
          label="Sukunimi"
          className={classes.field}
          value={sukunimi}
          onChange={(event) => setSukunimi(event.target.value)}
        />
        <TextField
          label="Yritys"
          className={classes.field}
          value={yritys}
          onChange={(event) => setYritys(event.target.value)}
        />
        <TextField
          label="Sähköpostiosoite"
          type="email"
          className={classes.field}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Puhelinnumero"
          type="tel"
          className={classes.field}
          value={puhelinnumero}
          onChange={(event) => setPuhelinnumero(event.target.value)}
        />
        <Select
          MenuProps={{ disablePortal: true }}
          value={vastuuhenkilo}
          className={classes.field}
          onChange={(event) => setVastuuhenkilo(event.target.value)}
        >
          <MenuItem value="">-- Valitse vastuuhenkilö --</MenuItem>
          <MenuItem value="Reijo">Reijo</MenuItem>
          <MenuItem value="Reko">Reko</MenuItem>
          <MenuItem value="Muu">Muu</MenuItem>
        </Select>
        {vastuuhenkilo === "Muu" && (
          <TextField
            label="Muu vastuuhenkilö"
            className={classes.field}
            value={vastuuhenkilo}
            onChange={handleOmaVastuuhenkiloChange}
            onBlur={handleOmavastuuhenkiloBlur}
            style={{ display: open ? "block" : "none" }}
          />
        )}
        <Button type="submit" className={classes.field}>
          Lähetä
        </Button>
      </form>
      <Button className={classes.cancelButton} onClick={handleCancel}>
        Peruuta
      </Button>
      <Modal open={open} onClose={handleCloseModal}>
        <div className={classes.modal}>
          <h2>Haluatko varmasti peruuttaa lomakkeen täyttämisen?</h2>
          <div className={classes.buttonContainer}>
            <Button
              onClick={handleConfirmCancel}
              variant="contained"
              color="primary"
            >
              Kyllä
            </Button>
            <Button
              onClick={handleCloseModal}
              variant="contained"
              color="secondary"
            >
              Ei
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Lomake;
