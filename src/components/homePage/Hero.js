import React from "react";
import fourEntrepreneurs from '../../images/fourentrepreneurs.jpg';

const HeroBg = () => {
  return (
    <section className="hero" >
      <div className="heroLeft">
        <h2 className="titleblue">Connect with entrepreneurs and grow your business</h2>
        <p>
          Entrepreneur Connect is a platform that helps entrepreneurs connect with each other, find potential partners, and collaborate on projects.
        </p>
        <button type="button">Join other Entrepreneurs!</button>
      </div>

      <div className="heroRight">
        <img src={fourEntrepreneurs} alt="" />
      </div>
    </section>
  )
};

export default HeroBg;