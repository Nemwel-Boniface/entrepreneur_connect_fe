/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost, fetchPosts, removePost } from '../../redux/post/postSlice';
import Comments from './Comments';

const Post = (props) => {
  const { post } = props;
  const {
    post_id,
    author,
    created_at,
    tags,
    body,
    image,
    likes_count,
  } = post;

  const [isActive, setActive] = useState(false);
  const [ showComment, setShowComment ] = useState(false)

  const toggleCommentSHow = () => {
    setShowComment(!showComment)
  }

  const toggleActiveClass = () => {
    setActive(!isActive);
  };

  const removeActive = () => {
    setActive(false);
  };

  // Changes to state
  const dispatch = useDispatch();

  const handleDelete = () => {
    // dispatch(removePost(id));
    dispatch(deletePost(post_id))
    removeActive();
    dispatch(fetchPosts())
  };

  return (
    <div className="Post" id={post_id}>
      <div className="postHeader">
        <div className="postHeaderLeft">
          <img src={author.image} alt="" />
          <div className="postHeaderLeftAuthor">
            <h2>{author.username}</h2>
            <p>{created_at}</p>
          </div>
        </div>

        <div className="postHeaderRight">
          <button type="button" onClick={toggleActiveClass}>
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="postBody">
        <p>{body}</p>
        <img src={image} alt="" />
      </div>

      <div className="taglist">
        <ul className="techstacks">
          {tags.map((tag) => (
            <li key={tag}>
              #
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="postInteractions">
        <div className="postInteractionsLeft">
          <p>
            <i className="fa fa-heart" aria-hidden="true" />
            {likes_count}
          </p>
          <p>
            <i className="fa fa-comment" aria-hidden="true" />
            12
          </p>
        </div>

        <div className="postInteractionsRight">
          <button type="button">
            <i className="fa fa-heart" aria-hidden="true" />
            Like
          </button>
          <button type="button"onClick={toggleCommentSHow}>
            <i className="fa fa-comment" aria-hidden="true" />
            Comment
          </button>
        </div>
      </div>
      {
        isActive
          ? (
            <div className="postDelEdit">
              <button type="button" onClick={removeActive}>
                Edit Post
              </button>
              <button type="button" onClick={handleDelete}>
                Delete Post
              </button>
            </div>
          ) : ''
      }
      {
        showComment
        ?
          <Comments post_id={post_id}/>
        : ''
      }
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    author: PropTypes.shape({
      image: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Post;
