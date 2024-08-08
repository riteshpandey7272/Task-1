import React, { useState, useEffect, useRef } from "react";
import { SpinnerDotted } from 'spinners-react';
import TopLoadingBar from 'react-top-loading-bar';
import './Auth.css';
import { Link } from "react-router-dom";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userDetails, setUserDetails] = useState({ username: "", email: "" });
  const [error, setError] = useState("");
  const loadingBarRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target['confirm-password'].value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    loadingBarRef.current.continuousStart();

    setTimeout(() => {
      setIsLoading(false);
      loadingBarRef.current.complete();
      setUserDetails({ username, email });
      setShowPopup(true);

      formRef.current.reset();
    }, 3000);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="wrapper">
      <TopLoadingBar
        color="#ff0000"
        height={3}
        onLoaderFinished={() => setIsLoading(false)}
        ref={loadingBarRef}
      />
      <div className="form-container">
        <h1 className="title">SIGN UP</h1>
        <form className="form" onSubmit={handleSubmit} ref={formRef}>
          <div className="input-group">
            <label htmlFor="username" className="username">
              Username
            </label>
            <input type="text" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="email">
              Email
            </label>
            <input type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="password">
              Password
            </label>
            <input type="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password" className="confirm-password">
              Confirm Password
            </label>
            <input type="password" name="confirm-password" required />
          </div>
          <button type="submit" className="sign-in">Sign Up</button>
          {isLoading && (
            <div className="spinner-container">
              <SpinnerDotted size={60} />
            </div>
          )}
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
          {showPopup && (
            <div className="popup">
              <p>Greeting, {userDetails.username}!</p>
              <p>Your email is {userDetails.email}.</p>
            </div>
          )}
          <div className="social-messages">
            <div className="line"></div>
            <p className="message">Sign up with social accounts</p>
            <div className="line"></div>
          </div>
          <div className="icons">
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-github"></i>
          </div>
          <p className="sign-up already-have-account">
            Already have an account?
            <Link to="/auth"> Log in </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
