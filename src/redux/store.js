import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from './user/signUpSlice';
import logInSlice from './user/logInSlice';
import postSlice from './post/postSlice';
import commentSlice from './comment/commentSlice';

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    logIn: logInSlice,
    posts: postSlice,
    comments: commentSlice,
  },
});

export default store;
