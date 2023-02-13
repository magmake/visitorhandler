import React from "react";
import {
  TextBoxOtsikko,
  TextBoxTeksti,
  ThemeWrappedTextBoxes,
} from "../components/Textbox";
import {
  ohjeita1_fin,
  ohjeita2_fin,
  ohjeita3_fin,
  ohjeita4_fin,
} from "../components/strings";

// etusivu, ohjeita yms.
const Ohjesivu = () => {
  return (
    <div>
      <ThemeWrappedTextBoxes>
        <TextBoxOtsikko text={ohjeita1_fin}></TextBoxOtsikko>
        <TextBoxTeksti text={ohjeita2_fin}></TextBoxTeksti>
        <TextBoxTeksti text={ohjeita3_fin}></TextBoxTeksti>
        <TextBoxTeksti text={ohjeita4_fin}></TextBoxTeksti>
      </ThemeWrappedTextBoxes>
    </div>
  );
};

export default Ohjesivu;
