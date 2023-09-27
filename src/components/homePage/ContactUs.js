import React from 'react';

const ContactUs = () => (
  <section className="ContactUsComponent" id='ContactUs'>
    <article className="contactUsWrapper">
      <div className="contactUsLeft">
        <h2>Do you have any questions?</h2>
        <div className="office">
          <h3>
            <i className="fa fa-map-marker" aria-hidden="true" />
            Offices
          </h3>
          <p>118, Westlands Business Centre, 7 Floor, Chiromo Lane, Westlands, Nairobi</p>
        </div>
        <div className="contact">
          <h3>
            <i className="fa fa-envelope" aria-hidden="true" />
            Contact
          </h3>
          <p>info@entrepreneurconnect.com</p>
          <p>support@entrepreneurconnect.com</p>
        </div>
        <div className="openHours">
          <h3>
            <i className="fa fa-clock-o" aria-hidden="true" />
            Open Hours
          </h3>
          <p>Monday - Friday: 2am - 5pm</p>
          <p>Saturday & Sunday: 10am - 3pm</p>
        </div>
      </div>

      <div className="contactUsRight">
        <form className="contactUsForm">
          <div>
            <input type="text" placeholder="First name*" required />
            <input type="text" placeholder="Last name*" required />
          </div>
          <div>
            <input type="email" placeholder="Your Email*" required />
            <input type="tel" placeholder="Your Number*" required />
          </div>
          <textarea placeholder="Write your message *" maxLength="1000" required />
          <button type="submit">
            Send Message
            <i className="fa fa-paper-plane" aria-hidden="true" />
          </button>
        </form>
      </div>
    </article>
  </section>
);

export default ContactUs;
