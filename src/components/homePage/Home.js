import React from "react";
import HeroBg from "./Hero";
import Features from "./Features";
import AboutUs from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="HomeComponent">
      <HeroBg />
      <AboutUs />
      <Features />
      <ContactUs />
      <Footer />
    </div>
  )
};

export default Home;