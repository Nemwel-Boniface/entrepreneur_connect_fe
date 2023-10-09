import React from "react";
import Posts from "./Posts";
import AddPost from "./AddPost";

const FeedMiddle = () => {
  return (
    <section className="FeedMiddle">
      <AddPost />
      <Posts />
    </section>
  )
}

export default FeedMiddle;