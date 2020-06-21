import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Posts from "./pages/Posts";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact></Route>
      <Route component={Employees} path="/empresas"></Route>
      <Route component={Posts} path="/posts"></Route>
    </BrowserRouter>
  );
};

export default Routes;
