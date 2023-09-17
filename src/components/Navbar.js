import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";

const NavBar = () => {
  const [ isActive, setActive ] = useState(false);

  const toggleActiveClass = () => {
    setActive(!isActive);
  }

  const removeActive = () => {
    setActive(false);
  }


  return (
    <header className="header">
      <nav className="mobilenavbar">
        <div className="mobileheader">
          <h3>
            <a href="#" className="logo">
              <small className="greenText">Entrepreneur</small>
              <small>Connect</small>
            </a>
          </h3>

          <button className="menu" onClick={toggleActiveClass} type="button">
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
        </div>
        {
          isActive ? 
          (
            <ul className="mobileNavbarItems">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Merch</a></li>
        </ul>
          ) : ""
        }        
      </nav>

      <nav className="desktopNav">
        <h3>
          <a href="#" className="logo">
            <small className="greenText">Entrepreneur</small>
            <small>Connect</small>
          </a>
        </h3>
        <ul className="desktopNavbarItems">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Merch</a></li>
        </ul>
      </nav>
    </header>
    // <div className="NavBarComponent">
    //   <Link to="/">Home</Link>
    //   <Link to="login">Log In</Link>
    //   <Link to="signup">Sign Up</Link>
    // </div>
  )
};

export default NavBar;