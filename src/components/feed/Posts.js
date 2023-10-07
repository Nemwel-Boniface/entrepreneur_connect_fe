import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import postImg1 from '../../images/aboutus/businesspeople.jpeg'
import postImg2 from '../../images/aboutus/businesspeoplepose.jpeg'

const Posts = () => {
  const postsDetails = useSelector((state) => state.posts.posts);

  if (postsDetails.length === 0) {
    return <div>Loading...</div>; // Display a loading indicator or message
  }
  return (
    <article className="Posts">
      {postsDetails.map((post) => (
          <Post key={post.id} post={post} />
      ))}
    </article>
  )
}

export default Posts;