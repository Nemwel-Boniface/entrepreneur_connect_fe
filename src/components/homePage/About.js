import React from 'react';
import aboutUsTopRightImg from '../../images/aboutus/businesspeoplepose.jpeg';
import aboutUsBottomLeftImg from '../../images/aboutus/smilingman.jpeg';
import ourMission from '../../images/aboutus/ourMission.png';
import ourVision from '../../images/aboutus/OurVision.png';

const AboutUs = () => (
  <section className="AboutUsComponent" id="AboutUs">
    <div className="sectionHeader">
      <h3>Who are we?</h3>
    </div>

    <article className="aboutUsBody">
      <div className="aboutUsTop">
        <div className="aboutUsTopLeft">
          <h2>About Entrepreneur Connect</h2>
          <p>
            Entrepreneur Connect is a platform that helps entrepreneurs
            connect with each other, find potential partners, collaborate
            on projects, and grow their businesses. We believe that
            entrepreneurs are stronger when they work together, and we provide
            the tools and resources they need to succeed.
          </p>
        </div>

        <div className="aboutUsTopRight">
          <img src={aboutUsTopRightImg} alt="" />
        </div>
      </div>

      <div className="aboutUsMiddle">
        <div className="aboutUsMiddleLeft">
          <img src={ourVision} alt="" />
          <h3>Our Vision</h3>
          <p>
            We envision a world where entrepreneurs are supported and
            connected, and where they can achieve their goals more easily.
            We want to create a platform where entrepreneurs can thrive and
            succeed.
          </p>
        </div>
        <div className="aboutUsMiddleRight">
          <img src={ourMission} alt="" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower entrepreneurs to achieve their goals.
            We believe that every entrepreneur has the potential to make a
            difference in the world, and we want to help them achieve their
            full potential.
          </p>
        </div>
      </div>

      <div className="aboutUsBottom">
        <div className="aboutUsBottomLeft">
          <img src={aboutUsBottomLeftImg} alt="" />
        </div>
        <div className="aboutUsBottomRight">
          <h2>Our values</h2>
          <p>We believe in the following values:</p>
          <ul>
            <li>
              <span className="valuesBold">Community</span>
              {' '}
              We believe that entrepreneurs are stronger when they work together.
              We create a platform where entrepreneurs can connect, collaborate,
              and support each other.
            </li>
            <li>
              <span className="valuesBold">Innovation</span>
              {' '}
              We believe that entrepreneurs are the driving force of innovation.
              We provide the tools and resources entrepreneurs need to develop and
              launch new products and services.
            </li>
            <li>
              <span className="valuesBold">Entrepreneurship</span>
              {' '}
              We believe that everyone has the potential to be an entrepreneur. We make it easy for
              people to start and grow their businesses.
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
);

export default AboutUs;
