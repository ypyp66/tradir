import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import BeerList from "./Pages/BeerList";
import Home from "./Pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
      </Switch>
    </Router>
  );
};

export default Routes;
