import React from "react";
import ClockBar from "./fragments/Clockbar";
import Tervetuloa from "./pages/Tervetuloa";
import Ohjesivu from "./pages/Ohjesivu";
import Lomake from "./pages/Lomake";
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
          <Route path="/lomake" element={<Lomake />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
