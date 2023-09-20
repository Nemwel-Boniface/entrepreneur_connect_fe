import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest, signUpSuccess, signUpFailure, setToken } from '../../redux/user/signUpSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.signUp.loading);
  const success = useSelector((state) => state.signUp.success);
  const error = useSelector((state) => state.signUp.error);

  const [ formData, setFormData ] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpRequest());

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/register/", {
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
        console.log(errorData.message);
      }
      // If the response is successful (HTTP status code 200-299), continue here
      const responseData = await response.json(); // Parse the response JSON
      const authToken = responseData.access; // Assuming the token is in the response
      console.log("response data" + authToken)
      
      // Save the token to localStorage
      localStorage.setItem("authToken", authToken);

      // Dispatch the signup success action and set the token in Redux state
      dispatch(signUpSuccess());
      dispatch(setToken(authToken)); // Assuming you have a setToken action
    } catch (error) {
      // Handle errors during the fetch request or error responses from the API
      dispatch(signUpFailure(error.message)); // Dispatch a failure action with the error message
    }
  }

  return (
    <section className='signUpComponent'>
      {loading && <p>Signing up...</p>}
      {error && <p>Error: {error}</p>}
      {success && <p>Signup successful!</p>}

      <form className='signUpForm' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User Name"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />

        <input
          type="email"
          placeholder="your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        
        <button type="submit" disabled={loading}>
          Signup
        </button>
      </form>
    </section>
  )
}

export default SignUp;
