import React from "react";
import userImage from '../../images/user/defaultUserIcon.png';

const Comment = () => {
  return (
    <div className="comment">
      <div className="commentTop">
        <img src={userImage} alt="" />
        <div className="commenternameDate">
          <h2>Nemwel Boniface</h2>
          <p>2 days ago</p>
        </div>
        <button type="button">
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </button>
      </div>
      <div className="commentBody">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat. </p>
      </div>
    </div>
  )
}

export default Comment;