import React, { useState } from "react";
import { useDispatch } from "react-redux";
import formatDate from "./currentDate";
import { addPost, createPost } from "../../redux/post/postSlice";

const AddPost = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    authorName: '',
    createdDate: '',
    postBody: '',
    postImage: '',
    postLikesCount: '',
    postCommentsCount: '',
    postTags: '',
  })

  const handleSubmit = async () => {
    if(formData.postBody !== '') {
      const postObject = {
        image: url,
        taglist: formData.postTags,
        createdDate: formattedDate,
        postBody: formData.postBody,
        postLikesCount: Math.floor(Math.random() * 40) + 1,
        postCommentsCount: Math.floor(Math.random() * 100) + 1
      }
      dispatch(addPost(postObject));
      await dispatch(createPost(postObject))
      setFormData({postBody: '', postTags: ''})
      setImage({image: ''})
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const uploadImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "entrepreneur_connect");
    data.append("cloud_name", "nemwelb");
    
    fetch("https://api.cloudinary.com/v1_1/nemwelb/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data.url); // Log the URL here
        handleSubmit();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="addPost">
      <form className="addpostForm" onSubmit={uploadImage} enctype="multipart/form-data">
      <input
         type="file"
         accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <input type="text" name="post tags"
      placeholder="Enter tags (comma separated)"
      value={formData.postTags}
      onChange={(e) => setFormData({ ...formData, postTags: e.target.value })}
      />
        <textarea className="postBody" placeholder="Post Body here"
          name="postBody" value={formData.postBody} 
          onChange={(e) => setFormData({ ...formData, postBody: e.target.value })}
          required>
        </textarea>

        <button type="submit">Add Post</button>
      </form>
    </section>
  )
}

export default AddPost;