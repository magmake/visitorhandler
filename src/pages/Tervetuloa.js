import React from "react";
import {
  TextBoxOtsikko,
  TextBoxTeksti,
  ThemeWrappedTextBoxes,
} from "../components/Textbox";
import { tervetuloa_fin, tervetuloa2_fin } from "../components/strings";

// etusivu, ohjeita yms.
const Frontpage = () => {
  return (
    <div>
      <ThemeWrappedTextBoxes>
        <TextBoxOtsikko text={tervetuloa_fin}></TextBoxOtsikko>
        <TextBoxTeksti text={tervetuloa2_fin}></TextBoxTeksti>
      </ThemeWrappedTextBoxes>
    </div>
  );
};

export default Frontpage;
