import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequest, logInSuccess, logInFailure, logOut } from '../../redux/user/logInSlice';

const LogIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.logIn.loading);
  const success = useSelector((state) => state.logIn.success);
  const failure = useSelector((state) => state.logIn.failure);
  const isLoggedIn = useSelector((state) => state.logIn.isLoggedIn);

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logInRequest());

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/login/", {
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

  const handleLogOut = () => {
    dispatch(logOut());
    console.log(isLoggedIn)
  }

  const renderLoginForm = () => {
    if (isLoggedIn) {
      // If the user is logged in, render a different component or redirect to a different page
      return (<div>
        <h2>You are logged in!</h2>
        <button type="submit" onClick={handleLogOut}>
            LogOut
          </button>
      </div>);

    } else {
      return (
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
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
            Login
          </button>

          {loading && <p>Logging in...</p>}
          {failure && <p>Error: {error}</p>}
          {success && <p>Login successful!</p>}
        </form>
      );
    }
  };

  return (
    <section className="loginComponent">
      {renderLoginForm()}
    </section>
  );
}
export default LogIn;
