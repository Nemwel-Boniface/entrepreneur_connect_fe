import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  success: false,
}

const signUpSlice = createSlice({
  name: "User signup",
  initialState,
  reducers: {
    signUpRequest: (state) => {
      state.loading = true;
      state.error = null
    },
    signUpSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    signUpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { signUpRequest, signUpSuccess, signUpFailure } = signUpSlice.actions;

export default signUpSlice.reducers;