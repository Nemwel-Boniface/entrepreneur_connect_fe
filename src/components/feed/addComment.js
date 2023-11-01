/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../redux/comment/commentSlice';

const AddComment = ({ post_id }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    comment: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.comment !== '') {
      const formBody = {
        comment: formData.comment,
        post: post_id,
      };
      await dispatch(createComment(formBody));
      setFormData({ comment: '' });
    }
  };

  return (
    <section className="AddComment">
      <form className="commentForm" onSubmit={handleSubmit}>
        <textarea
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          placeholder="Add your comment here"
          required
        />
        <button type="submit">Add Comment</button>
      </form>
    </section>
  );
};

export default AddComment;
