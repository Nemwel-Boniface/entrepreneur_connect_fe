import React from 'react';
import { Link } from 'react-router-dom';
import userProfilePic from '../../images/user/defaultUserIcon.png';

const FeedNavBar = () => (
  <section className="FeedNavBar">
    <nav className="navbar">
      <div className="feedNavBarLeft">
        <Link className="followrequests" to="/"><i className="fa fa-heart" aria-hidden="true" /></Link>
        <Link className="notifications" to="/">
          <i className="fa fa-bell" aria-hidden="true" />
          {' '}
        </Link>
        <Link className="messages" to="/"><i className="fa fa-envelope" aria-hidden="true" /></Link>
      </div>
      <div className="feedNavBarRight">
        <form className="formFeedSearch">
          <input type="text" placeholder="Search for something" />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true" />
            S
          </button>
        </form>
        <img src={userProfilePic} alt="" />
      </div>
    </nav>
  </section>
);

export default FeedNavBar;
