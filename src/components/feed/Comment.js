/* eslint-disable camelcase */
import React from 'react';

const Comment = (props) => {
  const { commt } = props;
  const {
    id,
    commenter,
    comment,
    created_at,
  } = commt;
  return (
    <div className="comment" id={id}>
      <div className="commentTop">
        <div className="commentTopLeft">
          <img src={commenter.image} alt="" />
          <div className="commenternameDate">
            <h2>{commenter.username}</h2>
            <p>{created_at}</p>
          </div>
        </div>
        <button type="button">
          <i className="fa fa-ellipsis-v" aria-hidden="true" />
        </button>
      </div>
      <div className="commentBody">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
