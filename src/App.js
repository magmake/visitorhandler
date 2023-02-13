import React from "react";
import ClockBar from "./fragments/Clockbar";
import Tervetuloa from "./pages/Tervetuloa";
import TermsOfService from "./components/Terms";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <header>
        <ClockBar />
      </header>
      <Tervetuloa />
      <TermsOfService />
    </div>
  );
};

export default App;
