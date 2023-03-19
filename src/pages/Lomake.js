import React, { useState } from "react";
import { TextField, Select, MenuItem, Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { TextBoxOtsikko, WrappedTextBoxesTheme } from "../components/Textbox";
import { lomakeOtsikko } from "../components/strings";
import {} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useStyles from "../styles";

import https from "https";

// etusivu, ohjeita yms.
const Lomake = ({ dateTime }) => {
  // lomakkeen tiedot
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [yritys, setYritys] = useState("");
  const [email, setEmail] = useState("");
  const [puhelinnumero, setPuhelinnumero] = useState("");
  const [vastuuhenkilo, setVastuuhenkilo] = useState("");
  const [open, setOpen] = useState(false);
  const [omaVastuuhenkilo, setOmavastuuhenkilo] = useState("");
  const [naytaLomakeViesti, asetaNaytaLomakeViesti] = useState(false);

  //formatoidaan datetime järkevämpään muotoon
  const formattedDate = dateTime.toLocaleString("fi-FI", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedTime = dateTime.toLocaleString("fi-FI", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

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
  /*const handleChange = (event) => {
    if (event.target.value === "Muu") {
      setOpen(true);
    } else {
      setOpen(false);
      setVastuuhenkilo(event.target.value);
    }
  };
  */

  const handleOmavastuuhenkiloBlur = () => {
    setVastuuhenkilo(omaVastuuhenkilo);
    setOpen(false);
  };
  const handleOmaVastuuhenkiloChange = (event) => {
    setOmavastuuhenkilo(event.target.value);
  };
  const [lomakeLahetetty, setLahetetty] = useState(false);
  const [lomakeEilahetetty, setEilahetetty] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    //näytetään viesti, että lomake lähetetty
    asetaNaytaLomakeViesti(true);
    setTimeout(() => {
      asetaNaytaLomakeViesti(false);
    }, 3000); // piilota ilmoitus 3 sekunnin kuluttua

    setEilahetetty(false);
    setLahetetty(false);

    const tiedot = {
      etunimi,
      sukunimi,
      yritys,
      email,
      puhelinnumero,
      vastuuhenkilo,
      date: formattedDate,
      time: formattedTime,
    };
    const jsonTiedot = `${etunimi}_${sukunimi}_${email}`;
    const formData = new FormData();
    formData.append("tiedot", JSON.stringify(tiedot, null, 2));
    formData.append("jsonNimi", jsonTiedot);

    try {
      const response = await fetch("https://localhost:443", {
        method: "POST",
        body: formData,
      });
      setLahetetty(true);
      console.log(response);
    } catch (error) {
      setEilahetetty(error.message);
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
          inputProps={{
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            title: "Syötä sähköpostiosoite muodossa esimerkki@esim.fi",
          }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Puhelinnumero"
          type="tel"
          className={classes.field}
          value={puhelinnumero}
          inputProps={{
            pattern: "^\\+?[0-9]{2,}$",
            title: "Syötä oikea puhelinnumero",
          }}
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
      {naytaLomakeViesti && (
        <div>
          {lomakeLahetetty && <p>Lomake lähetetty onnistuneesti!</p>}
          {lomakeEilahetetty && (
            <p>Lomakkeen lähettäminen epäonnistui: {lomakeEilahetetty}</p>
          )}
        </div>
      )}
      <Modal open={open} onClose={handleCloseModal}>
        <div className={classes.modal}>
          <h2>Haluatko varmasti peruuttaa lomakkeen täyttämisen?</h2>
          <div className={classes.buttonContainerLomake}>
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
