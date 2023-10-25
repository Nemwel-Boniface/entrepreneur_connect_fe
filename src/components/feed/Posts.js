import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/post/postSlice";
import Post from "./Post"

const Posts = () => {
  const dispatch = useDispatch()
  const {posts, isLoading, isError } = useSelector((store) => store.posts)
  const [postsFetched, setPostsFetched] = useState(false)
  useEffect(() => {
    if(!postsFetched) {
      dispatch(fetchPosts())
      setPostsFetched(true)
    }
  }, [dispatch, postsFetched])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if(isError) {
    return <div>Something went wrong</div>
  }
  return (
    <article className="Posts">
      {posts.map((post) => (
          <Post key={post.post_id} post={post} />
      ))}
    </article>
  )
}

export default Posts;