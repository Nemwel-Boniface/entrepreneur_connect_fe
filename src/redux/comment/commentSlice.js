import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: [],
  isLoading: false,
  isError: false,
  status: "null",
}

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
  }
})

export const { addComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;