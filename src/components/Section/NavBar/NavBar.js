import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.css";
const NavBar = () => {
  return (
    <nav className={styles.navbar} >
      <div className="nav-wrapper navbar ">
         <a className="logo-brand logo" href="/">Blood Bank Management System</a>
        <ul id="nav-mobile" className={styles.navbarRight}>
          <li className={styles.act}>
            
            <Link to="AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="WhyDonateBlood">Why Donate Blood</Link>
          </li>
          <li>
            <Link to="DonateBlood">Become A Donor</Link>
          </li>
          <li>
            <Link to="NeedBlood">Need Blood</Link>
          </li>
          <li>
            <Link to="ContactUs">Contact Us</Link>
          </li>
          
        </ul>
      </div>
    </nav>
    
  );
};
export default NavBar;
