import React, { useState } from "react";
import { useDispatch } from "react-redux";
import formatDate from "./currentDate";
import { addPost } from "../../redux/post/postSlice";

const AddPost = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    authorName: '',
    createdDate: '',
    postBody: '',
    postImage: '',
    postLikesCount: '',
    postCommentsCount: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.postBody !== '') {
      const postObject = {
        createdDate: formattedDate,
        postBody: formData.postBody,
        postLikesCount: Math.floor(Math.random() * 40) + 1,
        postCommentsCount: Math.floor(Math.random() * 100) + 1
      }
      dispatch(addPost(postObject));
      setFormData({postBody: ''})
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }
  return (
    <section className="addPost">
      <form className="addpostForm" onSubmit={handleSubmit}>
        <textarea className="postBody" placeholder="Post Body here"
          name="postBody" value={formData.postBody} onChange={handleChange}
          required>
        </textarea>

        <button type="submit">Add Post</button>
      </form>
    </section>
  )
}

export default AddPost;