import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/login"), 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong!");
    }

    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="card-title text-center mb-4">Signup Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              className="form-control"
              placeholder="Enter your username"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
    
    <Footer/>
    </>
    
  );
};

export default Signup;