import React from "react";
import {
  TextBoxOtsikko,
  TextBoxTeksti,
  WrappedTextBoxesTheme,
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
      <WrappedTextBoxesTheme>
        <TextBoxOtsikko text={ohjeita1_fin}></TextBoxOtsikko>
        <TextBoxTeksti text={ohjeita2_fin}></TextBoxTeksti>
        <TextBoxTeksti text={ohjeita3_fin}></TextBoxTeksti>
        <TextBoxTeksti text={ohjeita4_fin}></TextBoxTeksti>
      </WrappedTextBoxesTheme>
    </div>
  );
};

export default Ohjesivu;
