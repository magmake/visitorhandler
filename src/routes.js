import React from "react";
import { Route, Routes } from "react-router-dom";
import Tervetuloa from "./pages/Tervetuloa";
import Ohjesivu from "./pages/Ohjesivu";
import Lomake from "./pages/Lomake";
import Hallinta from "./pages/Hallinta";
import Kielivalinta from "./pages/Kielivalinta";


//Routet, dateTime on kellonaika, joka lähtee lomakkeen lähetyksen mukana
const RouteConfig = ({ changeLocale, locale, dateTime}) => {
    const routes =[
    { path: "/tervetuloa", element: <Tervetuloa/> },
    { path: "/ohjesivu", element: <Ohjesivu/> },
    { path: "/lomake", element: <Lomake dateTime={dateTime}/> },
    { path: "/hallinta", element: <Hallinta/> },
    { path: "/", element: <Kielivalinta changeLocale={changeLocale} locale={locale}/> },
];
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} element={route.element} changeLocale={changeLocale} locale={locale} render={(props) => (
            <route.element
              {...props}
              changeLocale={changeLocale}
              locale={locale}
            />
          )}  />
      ))}
    </Routes>
  );
};

export default RouteConfig;
