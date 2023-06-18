import React from "react";
import { Link } from "react-router-dom";
import"./NavBar.css";
const NavBar = () => {
  return (
   
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Blood Bank Management System
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-right collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                <li className="act">
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
                  <Link to="Recipient">Recipient</Link>
                </li>
                <li>
                  <Link to="ContactUs">Contact Us</Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
