import React from "react";
import Comment from "./Comment";
import AddComment from "./addComment";

const Comments = ({post_id}) => {
  return (
    <section className="comments">
      <Comment post_id={post_id}/>
      <AddComment post_id={post_id}/>
    </section>
  )
}

export default Comments;