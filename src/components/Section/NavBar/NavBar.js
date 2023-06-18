import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      {/* <header class="continer-fluid ">
        <div class="header-top">
          <div class="container">
            <div class="row col-det">
              <div class="col-lg-6 d-none d-lg-block">
                <ul class="ulleft">
                  <li>
                    <i class="far fa-envelope"></i>
                    sales@smarteyeapps.com
                    <span>|</span>
                  </li>
                  <li>
                    <i class="far fa-clock"></i>
                    Service Time : 12:AM
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 col-md-12">
                <ul class="ulright">
                  <li>
                    <i class="fas fa-cloud-upload-alt"></i>
                    Upload Video
                    <span>|</span>
                  </li>
                  <li>
                    <i class="fas fa-user"></i>
                    <Link to="Signup">Signup</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header> */}
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
                  <li className="float-right">
                    <Link to="Signup">Signup</Link>
                  </li>
                  <li className="float-right">
                    <Link to="Login">Login</Link>
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
    </>
  );
};
export default NavBar;
