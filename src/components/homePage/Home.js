import React from 'react';
import HeroBg from './Hero';
import Features from './Features';
import AboutUs from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';
import NavBar from '../Navbar';

const Home = () => (
  <div className="HomeComponent">
    <NavBar />
    <HeroBg />
    <AboutUs />
    <Features />
    <ContactUs />
    <Footer />
  </div>
);

export default Home;
