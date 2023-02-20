import React, { useEffect, useState } from "react";
import chipslogo from "./media/chipstersfood_logo.png";
import baronslogo from "./media/baronsfood_logo.png";
import TermsOfService from "../components/Terms";
import {
  TextBoxOtsikko,
  TextBoxTeksti,
  WrappedTextBoxesTheme,
} from "../components/Textbox";
import { tervetuloa_fin, tervetuloa2_fin } from "../components/strings";

// etusivu, ohjeita yms.
const Tervetuloa = () => {
  return (
    <div>
      <WrappedTextBoxesTheme>
        <TextBoxOtsikko text={tervetuloa_fin}></TextBoxOtsikko>
        <TextBoxTeksti text={tervetuloa2_fin}></TextBoxTeksti>
      </WrappedTextBoxesTheme>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img
            src={chipslogo}
            alt="chipslogo"
            style={{ width: "38%", maxWidth: "800px", marginTop: "10vh" }}
          />
        </div>
        <div style={{ width: "50%" }}>
          <img
            src={baronslogo}
            alt="baronslogo"
            style={{ width: "50%", maxWidth: "800px", marginTop: "10vh" }}
          />
        </div>
      </div>
      <TermsOfService />
    </div>
  );
};

export default Tervetuloa;
