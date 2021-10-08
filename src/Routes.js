import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Bucket from "Components/Bucket";
import BeerList from "Pages/BeerList";
import Home from "Pages/Home";
import "App.css";

const Routes = () => {
  const [location, setLocation] = useState();

  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            exact
            path="/home"
            render={() => <Home setLocation={setLocation} />}
          />
          <Route
            exact
            path="/beerlist"
            render={() => <BeerList setLocation={setLocation} />}
          />
        </Switch>
        <Bucket location={location} />
      </Router>
    </>
  );
};

export default Routes;
