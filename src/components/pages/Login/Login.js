import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import bl4 from "../../../image/bl4.jpg";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("donor");
  const navigate = useNavigate();

  const handleUserLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost/blood_back/api/user.php", {
        email,
        password,
        userType,
      });
      // Handle login success
      handleLogin();
      console.log("Login successful!");
      console.log(response.data); // Assuming the API response contains user data
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  const navigateToSignup = () => {
    navigate("/signup"); // Assuming the route for signup page is '/signup'
  };

  return (
    <div className="container">
      <form className="form_container" style={{ margin: "auto" }}>
        <div className="logo">
          <img
            src={bl4}
            className="card-img-top"
            alt="Card image"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <div className="title_container">
          <p className="title">Login to your Account</p>
          <span className="subtitle">
            Please create an account and enjoy the experience.
          </span>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">
            Email
          </label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            {/* SVG paths */}
          </svg>
          <input
            placeholder="name@mail.com"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="email_field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">
            Password
          </label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            {/* SVG paths */}
          </svg>
          <input
            placeholder="Password"
            title="Input title"
            name="input-name"
            type="password"
            className="input_field"
            id="password_field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="radio-group">
          <label className="radio">
            <input
              type="radio"
              value="donor"
              name="type"
              checked={userType === "donor"}
              onChange={() => setUserType("donor")}
            />
            Donor
            <span></span>
          </label>
          <label className="radio">
            <input
              type="radio"
              value="recipient"
              name="type"
              checked={userType === "recipient"}
              onChange={() => setUserType("recipient")}
            />
            Recipient
            <span></span>
          </label>
        </div>
        <div className="button_container">
          <button
            title="Sign In"
            type="submit"
            className="sign-in_btn"
            onClick={handleUserLogin}
          >
            <span>Sign In</span>
          </button>
          <p className="redirect_link" onClick={navigateToSignup}>
            Don't have an account? Sign Up
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
