import React from "react";
import userProfilePic from '../../images/user/defaultUserIcon.png';
import postImg from '../../images/fourentrepreneurs.jpg'

const Post = (props) => {
  const { post } = props;
  const {
    authorName, createdDate, postBody, postImage, postLikesCount, postCommentsCount,
  } = post;
  return (
    <div className="Post">
      <div className="postHeader">
        <div className="postHeaderLeft">
          <img src={userProfilePic} alt="" />
          <div className="postHeaderLeftAuthor">
            <h2>{authorName}</h2>
            <p>{createdDate}</p>
          </div>
        </div>

        <div className="postHeaderRight">
          <button type="button"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
        </div>
      </div>

      <div className="postBody">
        <p>{postBody}</p>
        <img src={postImage} alt="" />
      </div>

      <div className="postInteractions">
        <div className="postInteractionsLeft">
          <p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            {postLikesCount}
          </p>
          <p>
            <i class="fa fa-comment" aria-hidden="true"></i>
            {postCommentsCount}
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