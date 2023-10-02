import React from "react";
import { Link } from "react-router-dom";
import userProfilePic from '../../images/user/defaultUserIcon.png';

const FeedNavBar = () => {
  return (
    <section className="FeedNavBar">
      <nav className="navbar">
        <div className="feedNavBarLeft">
          <Link className="followrequests" to="/"><i class="fa fa-heart" aria-hidden="true"></i></Link>
          <LInk className="notifications" to="/"><i class="fa fa-bell" aria-hidden="true"></i></LInk>
          <LInk className="messages" to="/"><i class="fa fa-envelope" aria-hidden="true"></i></LInk>
        </div>
        <div className="feedNavBarRight">
          <form className="formFeedSearch">
            <input type="text" placeholder="Search for something" />
            <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
          </form>
          <img src={userProfilePic} alt="" />
        </div>
      </nav>
    </section>
  )
}

export default FeedNavBar;