import React from "react";

const AddComment = ({post_id}) => {
  return (
    <section className="AddComment">
      <form className="commentForm">
        <textarea placeholder="Add your comment here" required></textarea>
        <button type="submit">Add Comment</button>
      </form>
    </section>
  )
}

export default AddComment;