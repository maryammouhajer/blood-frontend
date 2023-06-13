import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="row">

        <div className="col-md-6">
          <div className="about-content">
            <h1 className="about-heading">About Us</h1>
            <p className="about-text">
              At our blood bank, we are committed to saving lives by providing a
              safe and reliable supply of blood and blood products to hospitals
              and medical centers. Our team of trained professionals works
              tirelessly to ensure that every donation is used to its fullest
              potential, and that patients in need receive the life-saving
              transfusions they require.
            </p>
            <p className="about-text">
              We understand that donating blood can be a daunting task, which is
              why we make every effort to ensure that our donation process is
              simple, quick, and painless. We welcome donors of all blood types
              and backgrounds, and we are always looking for new volunteers to
              help us in our mission to save lives.
            </p>
          </div>
          <div className="col-md-6">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;