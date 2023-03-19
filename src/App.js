import React, { useState, useEffect } from "react";
import ClockBar from "./fragments/Clockbar";
import Tervetuloa from "./pages/Tervetuloa";
import Hallinta from "./pages/Hallinta";
import Ohjesivu from "./pages/Ohjesivu";
import Lomake from "./pages/Lomake";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
require("dotenv").config();

//otetaan kellonaika ja päivämäärä sekunnin välein
const App = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 1000);
  }, []);

  //passataan ClockBariin datetime-props. Passataan myös Lomakkeelle dateTime.
  return (
    <div className="App">
      <header>
        <ClockBar dateTime={dateTime} />
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Tervetuloa />} />
          <Route path="/ohjesivu" element={<Ohjesivu />} />
          <Route path="/lomake" element={<Lomake dateTime={dateTime} />} />
          <Route path="/hallinta" element={<Hallinta />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
