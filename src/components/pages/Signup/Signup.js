import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <form className="form" style={{ margin: "auto" }}>
        <p className="title">Register</p>
        <p className="message">Signup now</p>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Firstname</span>
          </label>

          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input required placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>

        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>

        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Confirm password</span>
        </label>
        {/* <<!-- radio button --> */}
        <div className="radio-group">
          <label className="radio">
            <input type="radio" value="donor" name="type" />
            Donor
            <span></span>
          </label>
          <label className="radio">
            <input type="radio" value="recipient" name="type" />
            Recipient
            <span></span>
          </label>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>

        <p className="signin">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;


