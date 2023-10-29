import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  logInRequest, logInSuccess, logInFailure,
} from '../../redux/user/logInSlice';
import loginImg from '../../images/user/login-removebg-preview.png';

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.logIn.loading);
  const success = useSelector((state) => state.logIn.success);
  const failure = useSelector((state) => state.logIn.failure);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logInRequest());

    try {
      const response = await fetch('http://127.0.0.1:8000/api/user/login/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseData = await response.json();
      const authToken = responseData.access;

      localStorage.setItem('authToken', authToken);

      dispatch(logInSuccess(authToken));
      navigate('/feed');
    } catch (error) {
      dispatch(logInFailure(error.message));
    }
  };

  // const handleLogOut = () => {
  //   dispatch(logOut());
  // };

  const renderLoginForm = () => (
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

      <p><Link to="/">Forgot password?</Link></p>

      <button type="submit" disabled={loading}>
        Login
      </button>

      {loading && <p className="yellow">Logging in...</p>}
      {failure && (
      <p className="red">
        Error:
        {failure}
      </p>
      )}
      {success && <p className="green">Login successful!</p>}
    </form>
  );

  return (
    <section className="loginComponent">
      <article className="loginWrapper">
        <div className="loginLeft">
          <div className="logInLeftHeader">
            <h3>
              <small className="greenText">Entrepreneur</small>
              <small>Connect</small>
            </h3>
            <Link to="/">
              <i className="fa fa-arrow-left" aria-hidden="true" />
              Home
            </Link>
          </div>

          <div className="loginFormWrapper">
            <h3>Welcome Back!</h3>
            <p>Thank you for being a part of Entrepreneur Connect.</p>
            {renderLoginForm()}

            <div className="signUpLInk">
              <p>Don&apos;t have an account?</p>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>

        <div className="loginRight">
          <img src={loginImg} alt="" />
        </div>
      </article>
    </section>
  );
};
export default LogIn;
