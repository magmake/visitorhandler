import React, { useState, useEffect } from "react";
import ClockBar from "./fragments/Clockbar";
import Tervetuloa from "./pages/Tervetuloa";
import tonnikala from "./pages/media/tonnikala.jpg";
import Hallinta from "./pages/Hallinta";
import Ohjesivu from "./pages/Ohjesivu";
import Lomake from "./pages/Lomake";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Box } from "@material-ui/core";

//otetaan kellonaika ja päivämäärä sekunnin välein
const App = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 1000);
  }, []);

  //passataan ClockBariin datetime-props. Passataan myös Lomakkeelle dateTime.
    return (
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
            <Link to="/hallinta" style={{ position: "absolute", top: "10px", right: "10px" }}>
            Hallinta
          </Link>
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
  );
};

export default App;
