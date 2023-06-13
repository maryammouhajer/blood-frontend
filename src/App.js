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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
