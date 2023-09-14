import React from "react";
import HeroBg from "./Hero";
import Features from "./Features";
import AboutUs from "./About";

const Home = () => {
  return (
    <div className="HomeComponent">
      <HeroBg />
      <Features />
      <AboutUs />
    </div>
  )
};

export default Home;