import React from "react";
import Comment from "./Comment";
import AddComment from "./addComment";

const Comments = () => {
  return (
    <section className="comments">
      <Comment />
      <AddComment />
    </section>
  )
}

export default Comments;