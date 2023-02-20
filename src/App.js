import React from "react";
import ClockBar from "./fragments/Clockbar";
import Tervetuloa from "./pages/Tervetuloa";
import Ohjesivu from "./pages/Ohjesivu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//headerinä toimii "kellotaulu" ja määritetään routet
const App = (props) => {
  return (
    <div className="App">
      <header>
        <ClockBar />
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Tervetuloa />} />
          <Route path="/ohjesivu" element={<Ohjesivu />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
