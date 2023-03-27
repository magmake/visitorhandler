import React from "react";
import { Route, Routes } from "react-router-dom";
import Tervetuloa from "./pages/Tervetuloa";
import Ohjesivu from "./pages/Ohjesivu";
import Lomake from "./pages/Lomake";
import Hallinta from "./pages/Hallinta";


//Routet, dateTime on kellonaika, joka lähtee lomakkeen lähetyksen mukana
const RouteConfig = (props) => {
    const {dateTime} = props;
    
    const routes =[
    { path: "/", element: <Tervetuloa/> },
    { path: "/ohjesivu", element: <Ohjesivu/> },
    { path: "/lomake", element: <Lomake dateTime={dateTime}/> },
    { path: "/hallinta", element: <Hallinta/> },
];
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RouteConfig;
