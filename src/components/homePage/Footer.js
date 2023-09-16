import React from "react";

const Footer = () => {
  return (
    <footer className="footerComponent">
      <section className="footerWrappper">
        <article className="footerTop">
          <div className="footerTopLeft">
            <h3>Entrepreneur Connect</h3>
            <p>Entrepreneur Connect is a platform that helps entrepreneurs connect with each other, find potential partners, and collaborate on projects.</p>
          </div>

          <div className="footerTopMiddle">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Join Us</a></li>
            </ul>
          </div>

          <div className="footerTopRight">
            <h3>Socials</h3>
            <ul>
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </article>
        <div class="desgnedby">
          <p>Designed with <i class="fa fa-heart" aria-hidden="true"></i> By <a href="https://www.linkedin.com/in/nemwel-nyandoro" target="_blank">Nemwel.</a></p>
        </div>
      </section>
    </footer>
  )
}

export default Footer;