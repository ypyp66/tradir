import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Drink Beer</h1>
      <Link to="/beerlist">get Beer NOW</Link>
    </>
  );
};

export default Home;
