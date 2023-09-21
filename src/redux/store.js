import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./user/signUpSlice";
import logInSlice from "./user/logInSlice";

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    logIn: logInSlice,
  }
})

export default store;