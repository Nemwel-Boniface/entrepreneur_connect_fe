import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setActive] = useState(false);

  const toggleActiveClass = () => {
    setActive(!isActive);
  };

  const removeActive = () => {
    setActive(false);
  };

  return (
    <header className="header">
      <nav className="mobilenavbar">
        <div className="mobileheader">
          <h3>
            <a href="#hero" className="logo">
              <small className="greenText">Entrepreneur</small>
              <small>Connect</small>
            </a>
          </h3>

          <button className="menu" onClick={toggleActiveClass} type="button">
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
        </div>
        {
          isActive
            ? (
              <ul className="mobileNavbarItems">
                <li><Link to="/" onClick={removeActive}>Home</Link></li>
                <li><a href="#AboutUs" onClick={removeActive}>About</a></li>
                <li><a href="#ContactUs" onClick={removeActive}>Contact</a></li>
                <li><Link to="/login" onClick={removeActive}>Log In</Link></li>
                <li><Link to="/signup" onClick={removeActive}>Sign Up</Link></li>
              </ul>
            ) : ''
        }
      </nav>

      <nav className="desktopNav">
        <h3>
          <a href="#hero" className="logo">
            <small className="greenText">Entrepreneur</small>
            <small>Connect</small>
          </a>
        </h3>
        <ul className="desktopNavbarItems">
          <li><Link to="/">Home</Link></li>
          <li><a href="#AboutUs">About</a></li>
          <li><a href="#ContactUs">Contact</a></li>
          <li><Link to="login">Log In</Link></li>
          <li><Link to="signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
    // <div className="NavBarComponent">
      // <Link to="/">Home</Link>
      // <Link to="login">Log In</Link>
      // <Link to="signup">Sign Up</Link>
    // </div>
  );
};

export default NavBar;
