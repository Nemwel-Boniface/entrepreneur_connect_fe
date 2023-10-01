import React from 'react';
import { Link } from 'react-router-dom';
import userProfileBackground from '../../images/user/userProfileBackground.jpg';
import defaultuserProfile from '../../images/user/defaultUserIcon.png';

const CurrentUserProfile = () => (
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
            <p>
              <i className="fa fa-user" aria-hidden="true" />
              {' '}
              Account Information
            </p>
            <p><i className="fa fa-chevron-right" aria-hidden="true" /></p>
          </Link>
        </div>

        <div className="userProfileBottomItem">
          <Link to="/">
            <p>
              <i className="fa fa-cog" aria-hidden="true" />
              {' '}
              Settings
            </p>
            <p><i className="fa fa-chevron-right" aria-hidden="true" /></p>
          </Link>
        </div>

        <div className="userProfileBottomItem">
          <Link to="/">
            <p>
              <i className="fa fa-bookmark" aria-hidden="true" />
              {' '}
              Bookmarks
            </p>
            <p><i className="fa fa-chevron-right" aria-hidden="true" /></p>
          </Link>
        </div>

        <div className="userProfileBottomItem">
          <Link to="/">
            <p>
              <i className="fa fa-clock-o" aria-hidden="true" />
              {' '}
              Recent Activity
            </p>
            <p><i className="fa fa-chevron-right" aria-hidden="true" /></p>
          </Link>
        </div>

        <div className="userProfileBottomItem">
          <Link to="/">
            <p>
              <i className="fa fa-sign-out" aria-hidden="true" />
              {' '}
              Logout
            </p>
          </Link>
        </div>
      </div>
    </article>
  </section>
);

export default CurrentUserProfile;
