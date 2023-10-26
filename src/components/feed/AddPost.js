import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import formatDate from './currentDate';
import { createPost } from '../../redux/post/postSlice';

const AddPost = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    authorName: '',
    createdDate: '',
    postBody: '',
    postLikesCount: '',
    postCommentsCount: '',
    postTags: '',
  });

  const handleSubmit = async (url) => {
    if (formData.postBody !== '') {
      const postObject = {
        image: url,
        tags: formData.postTags,
        createdDate: formattedDate,
        postBody: formData.postBody,
        postLikesCount: Math.floor(Math.random() * 40) + 1,
        postCommentsCount: Math.floor(Math.random() * 100) + 1,
      };
      // dispatch(addPost(postObject));
      await dispatch(createPost(postObject));
      setFormData({ postBody: '', postTags: '' });
      setImage({ image: '' });
    }
  };

  const uploadImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'entrepreneur_connect');
    data.append('cloud_name', 'nemwelb');

    fetch('https://api.cloudinary.com/v1_1/nemwelb/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        handleSubmit(data.url);
      })/* eslint-disable no-console */
      .catch((err) => console.log(err));
  };

  return (
    <section className="addPost">
      <form className="addpostForm" onSubmit={uploadImage}>
        <input
          type="text"
          name="post tags"
          placeholder="Enter tags (comma separated)"
          value={formData.postTags}
          onChange={(e) => setFormData({ ...formData, postTags: e.target.value })}
        />
        <textarea
          className="postBody"
          placeholder="Post Body here"
          name="postBody"
          value={formData.postBody}
          onChange={(e) => setFormData({ ...formData, postBody: e.target.value })}
          required
        />
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button type="submit">Add Post</button>
        </div>
      </form>
    </section>
  );
};

export default AddPost;
