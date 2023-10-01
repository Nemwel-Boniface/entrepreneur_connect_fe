import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
  error: null,
  token: null,
  isLoggedIn: false,
};

const logInSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logInRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    logInSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    logOut: (state) => {
      state.success = false;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const {
  logInRequest, logInSuccess, logInFailure, logOut,
} = logInSlice.actions;

export default logInSlice.reducer;
