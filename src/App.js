import React, { useState, useEffect } from "react";
import ClockBar from "./fragments/Clockbar";
import { IntlProvider } from "react-intl";
import Tervetuloa from "./pages/Tervetuloa";
import { FormattedMessage } from "react-intl"; // formattedmessage, lokalisaatioon
import messages from "./locales.js"; // tuodaan lokalisaatiotekstit
import tonnikala from "./pages/media/tonnikala.jpg";
import Hallinta from "./pages/Hallinta";
import Ohjesivu from "./pages/Ohjesivu";
import Lomake from "./pages/Lomake";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import { Box } from "@material-ui/core";

//otetaan kellonaika ja päivämäärä sekunnin välein
const App = () => {
  const [dateTime, setDateTime] = useState(new Date());
    const [locale, setLocale] = useState("fi"); // oletuskieli
    const isEtusivu = location.pathname === "/";
    

  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 1000);
  }, []);
    
    const changeLocale = (newLocale) => {
    setLocale(newLocale);
  };

  //passataan ClockBariin datetime-props. Passataan myös Lomakkeelle dateTime.
    return (
    <IntlProvider locale={locale} messages={messages[locale]}>
    <div
      style={{
        backgroundImage: `url(${tonnikala})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
        zIndex: 0,
      }}
    >
      <div
        className="App"
        style={{ position: "relative", zIndex: 1, backgroundColor: "white" }}
      >
        <Router>
          <header>
            <ClockBar dateTime={dateTime} />
            {isEtusivu && (<Link to="/hallinta" style={{ position: "absolute", top: "10px", right: "10px" }}>
            Hallinta
          </Link>)}
            <div>
            <select
            id="language-selector"
                value={locale}
                onChange={(event) => changeLocale(event.target.value)}
                >
            <option value="fi">Suomi</option>
            <option value="en">English</option>
            <option value="se">Svenska</option>
            </select>
        </div>
          </header>
          <Routes>
            <Route path="/" element={<Tervetuloa />} />
            <Route path="/ohjesivu" element={<Ohjesivu />} />
            <Route path="/lomake" element={<Lomake dateTime={dateTime} />} />
            <Route path="/hallinta" element={<Hallinta />} />
          </Routes>
        </Router>
      </div>
    </div>
</IntlProvider>
  );
};

export default App;
