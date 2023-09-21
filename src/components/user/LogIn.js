import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequest, logInSuccess, logInFailure } from '../../redux/user/logInSlice';

const LogIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.logIn.loading);
  const success = useSelector((state) => state.logIn.success);
  const failure = useSelector((state) => state/logIn.failure);
  const isLoggesIn = useSelector((state) => state.logIn.isLoggedIn);

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logInRequest());

    try {
      const response = await fetch("API", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message)
        console.log(errorData.message);
      }

      const responseData = await response.json();
      const authToken = responseData.access;
      console.log("response data" + authToken)

      localStorage.setItem("authToken", authToken);

      dispatch(logInSuccess(authToken));
    } catch(error) {
      dispatch(logInFailure(error.message));
    }
  }
}
export default LogIn;
