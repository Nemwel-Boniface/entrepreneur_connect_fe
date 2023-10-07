import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from './user/signUpSlice';
import logInSlice from './user/logInSlice';
import postSlice from './post/postSlice';

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    logIn: logInSlice,
    posts: postSlice,
  },
});

export default store;
