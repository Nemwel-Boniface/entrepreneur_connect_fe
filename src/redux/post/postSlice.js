import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import postImg1 from '../../images/aboutus/businesspeople.jpeg'
import postImg2 from '../../images/aboutus/businesspeoplepose.jpeg'

const createPostURL = "http://127.0.0.1:8000/api/posts/post/"

const headers = {
  'Content-Type': 'application/json',
  'Authorization': localStorage.getItem('authToken'), // Assuming you have the token stored in localStorage
};

const initialState = {
  posts: [
    {
      id: 1,
      authorName: "Nemwel Boniface",
      createdDate: "July 26 2018, 01:03pm",
      postBody: "To find the perfect business partner, look for someone with complementary skills and experience, similar values and goals, and open communication.",
      postImage: postImg1,
      postLikesCount: 20,
      postCommentsCount: 2,
    },
    {
      id: 2,
      authorName: "Chris Onsando",
      createdDate: "March 26 2018, 05:43pm",
      postBody: "To find the perfect business partner, look for someone with complementary skills and experience, similar values and goals, and open communication.",
      postImage: postImg2,
      postLikesCount: 230,
      postCommentsCount: 25
    },
    {
      id: 3,
      authorName: "John Doe",
      createdDate: "May 26 2018, 02:23pm",
      postBody: "To find the perfect business partner, look for someone with complementary skills and experience, similar values and goals, and open communication.",
      postImage: postImg1,
      postLikesCount: 10,
      postCommentsCount: 4
    },
  ],
  status: "idle", // Possible values: "idle", "loading", "succeeded", "failed"
  error: null,
}

// Generating random custom details for the created posts
const currentImages = [postImg1, postImg2];
const currentNames = ["Jane Doe", "Michael Scoffield", "Arnold Martin"];
let currentImageRef = Math.floor(Math.random() * 2);
let currentNameRef = Math.floor(Math.random() * 3);
// Update the posts id based on the currents posts length
let postsLength = initialState.posts.length;

export const createPost = createAsyncThunk('posts/postPosts', async (post) => {
  try {
    const formData = new FormData();
    formData.append('image', post.image); // Assuming postImage is the file input field

    formData.append('body', post.postBody);
    formData.append('taglist', post.taglist);
    formData.append('created_at', post.createdDate);
    formData.append('updated_at', '2023-10-10T09:13:00.955361Z');
    formData.append('post_id', Math.floor(Math.random() * 300));

    const response = await fetch(createPostURL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to add Post');
    }

    const addedPost = await response.json();
    return addedPost;
  } catch (err) {
    return `Failed to fetch post: ${err.message}`;
  }
});

export const fetchPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const response = await axios.get("myURL");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts")
  }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  const deleteUrl = "URL/postID";
  try {
    const response = await axios.delete(deleteUrl, {
      id
    })
    return response.data;
  } catch (error) {
    throw new Error("Cannot delete post")
  }
})

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { id, authorName, createdDate, postBody, postImage, postLikesCount, postCommentsCount } = action.payload;
      const postObject = {
        id: ++postsLength,
        authorName: currentNames[currentNameRef],
        postBody,
        postImage: currentImages[currentImageRef],
        postLikesCount,
        postCommentsCount,
        createdDate
      }
      return {
        ...state,
        posts: [...state.posts, postObject]
      }
    },
    removePost: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== id)
      }
    },
    updatePost: (state, action) => {
      const updatedPost = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }
        return post;
      });

      return {
        ...state,
        posts: updatedPosts,
      };
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPosts.pending, (state) => {
      state.status = "Loading..";
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "Successful";
      state.posts.push(action.payload);
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.status = "Succesfully deleted post";
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    })
    .addCase(deletePost.rejected, (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    })
  }
})

export const { addPost, removePost, updatePost } = postSlice.actions
export default postSlice.reducer