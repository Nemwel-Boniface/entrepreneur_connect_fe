import React from "react";
import userProfilePic from '../../images/user/defaultUserIcon.png';
import postImg from '../../images/fourentrepreneurs.jpg'

const Post = () => {
  return (
    <div className="Post">
      <div className="postHeader">
        <div className="postHeaderLeft">
          <img src={userProfilePic} alt="" />
          <div className="postHeaderLeftAuthor">
            <h2>Nemwel Boniface</h2>
            <p>July 26 2018, 01:03pm</p>
          </div>
        </div>

        <div className="postHeaderRight">
          <button type="button"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
        </div>
      </div>

      <div className="postBody">
        <p>To find the perfect business partner, look for someone with complementary skills and experience, similar values and goals, and open communication.</p>
        <img src={postImg} alt="" />
      </div>

      <div className="postInteractions">
        <div className="postInteractionsLeft">
          <p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            20
          </p>
          <p>
            <i class="fa fa-comment" aria-hidden="true"></i>
            2
          </p>
        </div>

        <div className="postInteractionsRight">
          <button type="button">
            <i class="fa fa-heart" aria-hidden="true"></i>
            Like
          </button>
          <button type="button">
            <i class="fa fa-comment" aria-hidden="true"></i>
            Comment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post;