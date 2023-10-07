import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postImg1 from '../../images/aboutus/businesspeople.jpeg'
import postImg2 from '../../images/aboutus/businesspeoplepose.jpeg'

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

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { id, authorName, createdDate, postBody, postImage, postLikesCount, postCommentsCount } = action.payload;
      const postObject = {
        id,
        authorName,
        postBody,
        postImage,
        postLikesCount,
        postCommentsCount,
      }
      return {
        ...state,
        posts: [...state.posts, postObject]
      }
    },
    deletePost: (state, action) => {
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
    .addCase(updatePost.fulfilled, (state, action) => {
      state.status = "Succesfully updated post";
      const updatedPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state.posts[index] = updatedPost;
      }
    })
    .addCase(updatePost.rejected, (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    })
  }
})

export const { addPost, deletePost, updatePost } = postSlice.actions
export default postSlice.reducer