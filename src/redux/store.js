import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./user/signUpSlice";

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
  }
})

export default store;