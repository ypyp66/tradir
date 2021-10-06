import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Bucket from "Components/Bucket";
import Modals from "Modals/Modals";
import BeerList from "Pages/BeerList";
import Home from "Pages/Home";
import "App.css";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/beerlist" component={BeerList} />
        </Switch>
        <Bucket />
      </Router>
    </>
  );
};

export default Routes;
