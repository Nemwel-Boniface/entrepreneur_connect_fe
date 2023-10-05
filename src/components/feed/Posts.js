import React from "react";
import Post from "./Post";
import postImg1 from '../../images/aboutus/businesspeople.jpeg'
import postImg2 from '../../images/aboutus/businesspeoplepose.jpeg'

const Posts = () => {
  const postsDetails = [
    {
      id: 1,
      authorName: "Nemwel Boniface",
      createdDate: "July 26 2018, 01:03pm",
      postBody: "To find the perfect business partner, look for someone with complementary skills and experience, similar values and goals, and open communication.",
      posyImage: postImg1,
      postLikesCount: 20,
      postCommentsCount: 2
    },
    {
      id: 2,
      authorName: "Chris Onsando",
      createdDate: "March 26 2018, 05:43pm",
      postBody: "To find the perfect business partner, look for someone with complementary skills and experience, similar values and goals, and open communication.",
      posyImage: postImg2,
      postLikesCount: 230,
      postCommentsCount: 25
    },
    {
      id: 3,
      authorName: "John Doe",
      createdDate: "May 26 2018, 02:23pm",
      postBody: "To find the perfect business partner, look for someone with complementary skills and experience, similar values and goals, and open communication.",
      posyImage: postImg1,
      postLikesCount: 10,
      postCommentsCount: 4
    },
  ]
  return (
    <article className="Posts">
      {postsDetails.map((post) => (
          <Post key={post.id} post={post} />
      ))}
    </article>
  )
}

export default Posts;