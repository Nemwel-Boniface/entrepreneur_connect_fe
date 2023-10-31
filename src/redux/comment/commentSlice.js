import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const createCommentsURL = `http://127.0.0.1:8000/api/posts/comments/`;

const initialState = {
  comments: [],
  isLoading: false,
  isError: false,
  status: "null",
}

export const fetchComments = createAsyncThunk('comments/getComments', async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/posts/comments/${id}/`)
    if(!response.ok) {
      throw new Error(`Failed to fetch comments.`)
    }
    const comments = await response.json()
    return comments
  } catch (error) {
    throw new Error(`Failed to fetch comments: ${error.message}}`)
  }
}) 

export const createComment = createAsyncThunk('comments/postComments', async (comment) => {
  try {
    const formData = {
      comment: comment.comment,
      post: comment.post,
    }
    const response = await fetch(createCommentsURL, {
      method: "POST",
      headers: {
        'content_type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(formData)
    })

    if(!response.ok) {
      throw new Error(`Failed to create comment`)
    }
    const addedComment = response.json()
    return addedComment;
  } catch(err) {
    return `Failed to create comment ${err.message}`
  }
})

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { comment, post_od } = action.payload;
      const commentObject = {
        comment,
        post_id,
      }

      return {
        ...state,
        comments: [...state.comments, commentObject]
      }
    },
    removeComment: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id !== id)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isError = action.error.message
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false
        state.status = "Successful"
        state.isError = false
        state.comments = action.payload
      })
  }
})

export const { addComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;