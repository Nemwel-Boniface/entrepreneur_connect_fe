import React from "react";
import FeedNavBar from "./FeedNavBar";
import FeedLeft from "./FeedLeft";
import FeedMiddle from "./FeedMiddle";
import FeedRight from "./FeedRight";

const Feed = () => {
  return (
    <section className="Feed">
      <FeedNavBar />
      <article className="feedBody">
        <FeedLeft />
        <FeedMiddle />
        <FeedRight />
      </article>
    </section>
  )
}

export default Feed;