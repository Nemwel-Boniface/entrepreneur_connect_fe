/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './Comment';
import AddComment from './addComment';
import { fetchComments } from '../../redux/comment/commentSlice';

const Comments = ({ post_id }) => {
  const dispatch = useDispatch();
  const { comments, isLoading, isError } = useSelector((store) => store.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (comments.length === 0) {
    return <div>There are no comments created</div>;
  }

  // Filter comments based on the post_id
  const filteredComments = comments.filter((comment) => comment.post === post_id);
  return (
    <section className="comments">
      {filteredComments.map((commt) => (
        <Comment key={commt.id} commt={commt} />
      ))}
      <AddComment post_id={post_id} />
    </section>
  );
};

Comments.propTypes = {
  post_id: PropTypes.number.isRequired, // You can specify the appropriate type
};

export default Comments;
