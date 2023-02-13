import React from "react";
import { Route } from "react-router-dom";

import Tervetuloa from "./pages/Tervetuloa";
import Ohjesivu from "./pages/Ohjesivu";

const routes = [
  { path: "/", component: Tervetuloa, exact: true },
  { path: "/ohjesivu", component: Ohjesivu },
];

const RouteConfig = () => {
  return (
    <>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </>
  );
};

export default RouteConfig;
