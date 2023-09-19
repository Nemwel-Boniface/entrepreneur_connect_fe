import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest, signUpSuccess, signUpFailure } from '../../redux/user/signUpSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.SignUp.loading);
  const success = useSelector((state) => state.SignUp.success);
  const error = useSelector((state) => state.SignUp.error);

  const [ formData, setFormData ] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpRequest());

    try {
      const response = await fetch("API URL", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      if(!response.ok) {
        // Handle non-successful response (HTTP status code other than 200-299)
        const errorData = await response.json(); // Parse the response JSON
        throw new Error(errorData.message); // Throw an error with the error message from the API
      }
      // If the response is successful (HTTP status code 200-299), continue here
      const responseData = await response.json(); // Parse the response JSON
      const authToken = responseData.token; // Assuming the token is in the response

      // Save the token to localStorage
      localStorage.setItem("authToken", authToken);

      // Dispatch the signup success action and set the token in Redux state
      dispatch(signUpSuccess());
      dispatch(setToken(authToken)); // Assuming you have a setToken action
    } catch (error) {
      // Handle errors during the fetch request or error responses from the API
      dispatch(signupFailure(error.message)); // Dispatch a failure action with the error message
    }
  }
}

export default SignUp;
