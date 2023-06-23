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
        <div class="radio-group">
          <label class="radio">
            <input type="radio" value="donor" name="type" />
            Donor
            <span></span>
          </label>
          <label class="radio">
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

// import React, { useState } from 'react'

// const Signup= ({ handleSignUp }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform sign-up validation and user registration
//     // ...

//     // Example sign-up validation
//     if (password === confirmPassword) {
//       handleSignUp();
//     } else {
//       alert('Passwords do not match');
//     }

//     // Reset form fields
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <div>
//       <h2>Sign Up Page</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup
