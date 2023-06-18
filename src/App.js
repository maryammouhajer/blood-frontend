import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import DonateBlood from "./components/pages/DonateBlood/DonateBlood";
import NavBar from "./components/Section/NavBar/NavBar";
import Footer from "./components/Section/Footer/Footer";
import WhyDonateBlood from "./components/pages/WhyDonateBlood/WhyDonateBlood";
import NeedBlood from "./components/pages/NeedBlood/NeedBlood";
import Recipient from "./components/pages/Recipient/Recipient";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="AboutUs" element={<AboutUs />}></Route>
        <Route path="WhyDonateBlood" element={<WhyDonateBlood />}></Route>
        <Route path="ContactUs" element={<ContactUs />}></Route>
        <Route path="DonateBlood" element={<DonateBlood />}></Route>
        <Route path="NeedBlood" element={<NeedBlood />}></Route>
        <Route path="Recipient" element={<Recipient />}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Signup" element={<Signup/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import SignUpPage from './SignUpPage';
// import HomePage from './HomePage';

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   const handleSignUp = () => {
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/">
//             {loggedIn ? (
//               <Redirect to="/home" />
//             ) : (
//               <Redirect to="/login" />
//             )}
//           </Route>
//           <Route path="/login">
//             <LoginPage handleLogin={handleLogin} />
//           </Route>
//           <Route path="/signup">
//             <SignUpPage handleSignUp={handleSignUp} />
//           </Route>
//           <Route path="/home">
//             {loggedIn ? (
//               <HomePage handleLogout={handleLogout} />
//             ) : (
//               <Redirect to="/login" />
//             )}
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;

