import React, { useState, useEffect } from "react";
import { TextField, Select, MenuItem, Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { TextBoxOtsikko, WrappedTextBoxesTheme } from "../components/Textbox";
import { lomakeOtsikko } from "../components/strings";
import { useNavigate } from "react-router-dom";
import MenuItems from "../components/MenuItems.js";
import useStyles from "../styles";



// etusivu, ohjeita yms.
const Lomake = ({ dateTime }) => {
  // lomakkeen tiedot
    const [etunimi, setEtunimi] = useState("");
    const [sukunimi, setSukunimi] = useState("");
    const [yritys, setYritys] = useState("");
    const [email, setEmail] = useState("");
    const [puhelinnumero, setPuhelinnumero] = useState("");
    const [vastuuhenkilo, setVastuuhenkilo] = useState("");
    // Lomakkeen tilan tallentaminen, jos lomake täytetään vajaana ja palataan virheestä. Tämä ei ole pakollinen, disabled-tila ajaa saman asian.
    const [lomakkeenTila, setLomakkeenTila] = useState({
        etunimi: "",
        sukunimi: "",
        yritys: "",
        email: "",
        puhelinnumero: "",
        vastuuhenkilo: "",
    });
    
    //lomakkeen kentät vajaat, Lähetä-nappi disabloidaan
    const [disabled, setDisabled] = useState(true);
    // Modalin tila
    const [open, setOpen] = useState(false);
    // Muu-valinnan omavastuuhenkilön tila
    const [omaVastuuhenkilo, setOmavastuuhenkilo] = useState("");
    // Viesti lomakkeen lähetyksestä
    const [naytaLomakeViesti, asetaNaytaLomakeViesti] = useState(false);
    // Jos Muu valittu, näyttää tekstikentän
    const [naytaMuuVastuuhenkiloKentta, setNaytaMuuVastuuhenkiloKentta] = useState(false);
    // Muu-vastuuhenkilön tila
    const [muuVastuuhenkilo, setMuuVastuuhenkilo] = useState("");
    // lomakkeen lähetys onnistui
    const [lomakeLahetetty, setLahetetty] = useState(false);
    // lomakkeen lähetys ei onnistunut
    const [lomakeEilahetetty, setEilahetetty] = useState(false);
    //
    const [selectOpen, setSelectOpen] = useState(false);
    
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
    
    
    useEffect(() => {
        const hasEmptyFields = [etunimi, sukunimi, yritys, email, puhelinnumero, vastuuhenkilo].some((field) => field === "");
        setDisabled(hasEmptyFields);
    }, [etunimi, sukunimi, yritys, email, puhelinnumero, vastuuhenkilo]);

  //tyylit
  const classes = useStyles();
  //navigointi sivustolla
  const history = useNavigate();

  //avataan peruutusmodal, jos peruutetaan lomakkeen täyttö
  const handleCancel = () => {
    setOpen(true);
  };

  // suljetaan peruutusmodal jos palataan peruutusikkunasta
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
  const valittuVastuuhenkilo = event.target.value;
  if (valittuVastuuhenkilo === "Muu") {
    setNaytaMuuVastuuhenkiloKentta(true);
    setVastuuhenkilo("");
    setSelectOpen(true);
  } else {
    setNaytaMuuVastuuhenkiloKentta(false);
    setVastuuhenkilo(valittuVastuuhenkilo);
  }
};
    
// muokkaa vastuuhenkilö-tilaa, jos käyttäjä valitsee "Muu"
const handleOmaVastuuhenkiloChange = (event) => {
  setOmavastuuhenkilo(event.target.value);
  setVastuuhenkilo(event.target.value);
};

// käsittele "Muu"-vastuuhenkilön tekstikentän blur -tapahtuma
   const handleOmavastuuhenkiloBlur = () => {
    setVastuuhenkilo(omaVastuuhenkilo);
    setOpen(false);
  };
    const tarkistaLomake = () => {
        const tyhjatKentat = [etunimi, sukunimi, yritys, email, puhelinnumero, vastuuhenkilo].filter((kentta) => kentta === "");
            if (tyhjatKentat.length > 0) {
            alert("Täytä kaikki kentät ennen lomakkeen lähettämistä.");
            return false;
        }
            return true;
    };
    const tallennaLomakkeenTila = (event) => {
  const { name, value } = event.target;
  setLomakkeenTila((prevTila) => ({
    ...prevTila,
    [name]: value,
  }));
};
    
    const handleSubmit = async (event) => {
         if (!tarkistaLomake()) {
        event.preventDefault();
    setLomakkeenTila({
      ...lomakkeenTila,
      etunimi,
      sukunimi,
      yritys,
      email,
      puhelinnumero,
      vastuuhenkilo,
    });
    return;
  }
     

        
    //näytetään viesti, että lomake lähetetty
    asetaNaytaLomakeViesti(true);
    setTimeout(() => {
      asetaNaytaLomakeViesti(false);
    }, 3000); // piilota ilmoitus 3 sekunnin kuluttua
         if (!tarkistaLomake()) {
            setLomakkeenTila({ etunimi, sukunimi, yritys, email, puhelinnumero, vastuuhenkilo });
            return

    }

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
      const response = await fetch("https://172.17.166.55:443", {
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
            defaultValue={lomakkeenTila.etunimi}
          onChange={(event) => setEtunimi(event.target.value)}
        />
        <TextField
          label="Sukunimi"
          className={classes.field}
          value={sukunimi}
        defaultValue={lomakkeenTila.sukunimi}
          onChange={(event) => setSukunimi(event.target.value)}
        />
        <TextField
          label="Yritys"
          className={classes.field}
          value={yritys}
        defaultValue={lomakkeenTila.yritys}
          onChange={(event) => setYritys(event.target.value)}
        />
        <TextField
          label="Sähköpostiosoite"
          type="email"
          className={classes.field}
          value={email}
        defaultValue={lomakkeenTila.email}
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
        defaultValue={lomakkeenTila.puhelinnumero}
          inputProps={{
            pattern: "^\\+?[0-9]{2,}$",
            title: "Syötä oikea puhelinnumero",
          }}
          onChange={(event) => setPuhelinnumero(event.target.value)}
        />
        <div className={classes.valitseOtsikko}>
        Valitse ketä olet tullut tapaamaan
      </div>
        <Select
            MenuProps={{ disablePortal: true }}
            value={vastuuhenkilo}
        defaultValue={lomakkeenTila.vastuuhenkilo}
            className={classes.field}
            onChange={handleChange}
            onClose={() => setSelectOpen(false)}
            onOpen={() => setSelectOpen(true)}
        >

          {MenuItems.map(item => (
        <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
))}
        </Select>
        {naytaMuuVastuuhenkiloKentta && (
        <TextField
            label="Muu vastuuhenkilö"
            className={classes.field}
            value={vastuuhenkilo}
            onChange={handleOmaVastuuhenkiloChange}
            onBlur={handleOmavastuuhenkiloBlur}
            style={{ display: naytaMuuVastuuhenkiloKentta ? "block" : "none" }}
            />
        )}
        <Button type="submit" className={classes.field} disabled={disabled}>
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
