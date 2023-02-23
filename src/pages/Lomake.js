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
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [yritys, setYritys] = useState("");
  const [email, setEmail] = useState("");
  const [puhelinnumero, setPuhelinnumero] = useState("");
  const [valinta, setValinta] = useState("");
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const history = useNavigate();

  const handleCancel = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleConfirmCancel = () => {
    setOpen(false);
    history("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Lomakkeen tiedot:",
      etunimi,
      sukunimi,
      yritys,
      email,
      puhelinnumero,
      valinta
    );
    // lomakkeen tiedot console.logiin
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
          value={valinta}
          className={classes.field}
          onChange={(event) => setValinta(event.target.value)}
        >
          <MenuItem value="Reijo">Reijo</MenuItem>
          <MenuItem value="Reko">Reko</MenuItem>
        </Select>
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
