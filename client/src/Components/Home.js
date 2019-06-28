import React, { Component } from "react";
import Slider from "./Slider";
import Cards from "./Cards";
import Discounts from "./Discounts";
import Footer from "./Footer";

const Home = () => {
  return (
    <div margin-top="100px">
      <Slider style={{ marginBottom: "200" }} />
      <Cards />
      <Discounts />
      <Footer />
    </div>
  );
};

export default Home;
