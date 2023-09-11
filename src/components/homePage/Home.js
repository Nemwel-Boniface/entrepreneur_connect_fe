import React from "react";
import AboutUs from "./About";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div className="HomeComponent">
      This is the Home component
      <AboutUs />
      <ContactUs />
    </div>
  )
};

export default Home;