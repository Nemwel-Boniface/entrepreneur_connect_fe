import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const createPostURL = 'http://127.0.0.1:8000/api/posts/post/';

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  status: 'null',
};

export const fetchPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/posts/posts/');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }
});

export const createPost = createAsyncThunk('posts/postPosts', async (post) => {
  try {
    const formData = {
      image: post.image,
      body: post.postBody,
      taglist: post.tags,
    };
    const response = await fetch(createPostURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to add Post');
    }

    fetchPosts();
    const addedPost = await response.json();
    return addedPost;
  } catch (err) {
    return `Failed to fetch post: ${err.message}`;
  }
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  const deleteUrl = `http://127.0.0.1:8000/api/posts/post/${id}/`;
  try {
    const response = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to remove Post');
    }

    if (response.status === 204) {
      return null;
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    throw new Error('Cannot delete post');
  }
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const {
        id, tags, authorName, createdDate, postBody, image, postLikesCount, postCommentsCount,
      } = action.payload;
      const postObject = {
        id,
        authorName,
        postBody,
        image,
        postLikesCount,
        postCommentsCount,
        createdDate,
        taglist: tags,
      };
      return {
        ...state,
        posts: [...state.posts, postObject],
      };
    },
    removePost: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== id),
      };
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
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isError = action.error.message;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'Successful';
        state.isLoading = false;
        state.isError = false;
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'Succesfully deleted post';
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'Failed';
        state.error = action.error.message;
      });
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
