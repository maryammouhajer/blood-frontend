import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/admin/dashboard");

  const shouldDisplayNavBarAndFooter = !(
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    isDashboard
  );

  return (
    <div className="App">
      {shouldDisplayNavBarAndFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="WhyDonateBlood" element={<WhyDonateBlood />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="DonateBlood" element={<DonateBlood />} />
        <Route path="NeedBlood" element={<NeedBlood />} />
        <Route path="Recipient" element={<Recipient />} />
        <Route path="/admin/dashboard/*" element={<Dashboard />} />
        <Route
          path="/login"
          element={<Login shouldDisplayNavBarAndFooter={false} />}
        />
        <Route
          path="/signup"
          element={<Signup shouldDisplayNavBarAndFooter={false} />}
        />
      </Routes>
      {shouldDisplayNavBarAndFooter && <Footer />}
    </div>
  );
}

export default App;
