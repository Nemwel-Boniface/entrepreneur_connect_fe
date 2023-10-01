import React from 'react';
import { Link } from 'react-router-dom';
import hamster from '../images/hamster.png';

const NotFound = () => (
  <section className="NotFound">
    <div className="NotFoundLeft">
      <img src={hamster} alt="" />
    </div>
    <div className="NotFoundRight">
      <h1>
        Shhh...
        Error 404!
      </h1>
      <p>
        Oops, it seems our entrepreneurial hamster took a coffee break ☕️
        and wandered off to brainstorm its next big idea! 🐹💡
      </p>
      <p>
        While our little genius is away, why not explore our other wild
        pages? Who knows, you might stumble upon your next Eureka moment! 🚀✨
      </p>
      <p>
        While our entrepreneurial hamster naps, here&apos;s some wisdom: &apos;Happiness
        is the key to success. Love what you do, and you&apos;ll find it.&apos; 🌟
      </p>
      <p>
        Feel free to use the map or search bar above to navigate back to the action,
        and if you find our entrepreneurial hamster, be sure to let us know! 🐹🕵️‍♂️ #HamsterHunt
      </p>
      <button type="button">
        <Link to="/">
          <i className="fa fa-arrow-left" aria-hidden="true" />
          This way
        </Link>
      </button>
    </div>
  </section>
);

export default NotFound;
