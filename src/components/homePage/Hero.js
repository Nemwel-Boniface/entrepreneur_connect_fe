import React from 'react';
import { useNavigate } from 'react-router-dom';
import fourEntrepreneurs from '../../images/fourentrepreneurs.jpg';

const HeroBg = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };
  return (
    <section className="hero" id="hero">
      <div className="heroLeft">
        <h2 className="titleblue">Connect with entrepreneurs and grow your business</h2>
        <p>
          Entrepreneur Connect is a platform that helps entrepreneurs connect with each
          other, find potential partners, and collaborate on projects.
        </p>
        <button type="button" onClick={handleClick}>Join other Entrepreneurs!</button>
      </div>

      <div className="heroRight">
        <img src={fourEntrepreneurs} alt="" />
      </div>
    </section>
  );
};

export default HeroBg;
