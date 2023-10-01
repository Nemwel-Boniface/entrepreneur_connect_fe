import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footerComponent">
    <section className="footerWrappper">
      <article className="footerTop">
        <div className="footerTopLeft">
          <h3>Entrepreneur Connect</h3>
          <p>
            Entrepreneur Connect is a platform that helps entrepreneurs connect
            with each other, find potential partners, and collaborate on projects.
          </p>
        </div>

        <div className="footerTopMiddle">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#AboutUs">About</a></li>
            <li><a href="#ContactUs">Contact</a></li>
            <li><Link to="login">Log In</Link></li>
            <li><Link to="signup">Sign Up</Link></li>
          </ul>
        </div>

        <div className="footerTopRight">
          <h3>Socials</h3>
          <ul>
            <li><a href="#hero"><i className="fa fa-facebook" aria-label="facebook Profile" aria-hidden="true" /></a></li>
            <li><a href="#hero"><i className="fa fa-twitter" aria-label="twitter Profile" aria-hidden="true" /></a></li>
            <li><a href="#hero"><i className="fa fa-instagram" aria-label="Instagram Profile" aria-hidden="true" /></a></li>
            <li><a href="#hero"><i className="fa fa-youtube-play" aria-label="youtube Profile" aria-hidden="true" /></a></li>
            <li><a href="#hero"><i className="fa fa-linkedin" aria-label="Linkedin Profile" aria-hidden="true" /></a></li>
          </ul>
        </div>
      </article>
      <div className="desgnedby">
        <p>
          Designed with
          <i className="fa fa-heart" aria-hidden="true" />
          {' '}
          By
          {' '}
          <a href="https://www.linkedin.com/in/nemwel-nyandoro" target="_blank" rel="noreferrer">Nemwel.</a>
        </p>
      </div>
    </section>
  </footer>
);

export default Footer;
