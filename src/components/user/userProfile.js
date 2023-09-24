import React from "react";
import userProfileBackground from '../../images/user/userProfileBackground.jpg';
import defaultuserProfile from '../../images/user/defaultUserIcon.png';
import { Link } from "react-router-dom";

const CurrentUserProfile = () => {
  return (
    <section className="currentUserProfileComponent">
      <img src={userProfileBackground} alt="" />
      <article className="currentUserProfileWrapper">
        <div className="userProfileTop">
          <img src={defaultuserProfile} alt="" />
          <p>Nemwel Boniface</p>
        </div>

        <div className="userProfileMiddle">
          <div className="userProfileMiddle-left">
            <h3>48</h3>
            <p>Posts</p>
          </div>

          <div className="userProfileMiddle-left">
            <h3>600</h3>
            <p>Followers</p>
          </div>

          <div className="userProfileMiddle-left">
            <h3>680</h3>
            <p>Following</p>
          </div>
        </div>

        <div className="userProfileBottom">
          <div className="userProfileBottomItem">
            <Link to="/">
              <p><i class="fa fa-user" aria-hidden="true"></i> Account Information</p>
              <p><i class="fa fa-chevron-right" aria-hidden="true"></i></p>
            </Link>
          </div>

          <div className="userProfileBottomItem">
            <Link to="/">
              <p><i class="fa fa-cog" aria-hidden="true"></i> Settings</p>
              <p><i class="fa fa-chevron-right" aria-hidden="true"></i></p>
            </Link>
          </div>

          <div className="userProfileBottomItem">
            <Link to="/">
              <p><i class="fa fa-bookmark" aria-hidden="true"></i> Bookmarks</p>
              <p><i class="fa fa-chevron-right" aria-hidden="true"></i></p>
            </Link>
          </div>

          <div className="userProfileBottomItem">
            <Link to="/">
              <p><i class="fa fa-clock-o" aria-hidden="true"></i> Recent Activity</p>
              <p><i class="fa fa-chevron-right" aria-hidden="true"></i></p>
            </Link>
          </div>

          <div className="userProfileBottomItem">
            <Link to="/">
              <p><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</p>
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default CurrentUserProfile;