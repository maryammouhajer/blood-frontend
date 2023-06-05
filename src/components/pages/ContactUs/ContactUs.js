import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to a backend API or perform any desired action
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear form fields
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
  };

  const contactDetails = {
    address: "123 Main Street, City, Country",
    contactNumber: "+1 123-456-7890",
    email: "example@example.com",
  };

  return (
   
        <div className="container">
          <div id="content-wrap" style={{ paddingBottom: "50px" }}>
            <h1 className="mt-4 mb-3">Contact</h1>
            <div className="row">
              <div className="col-lg-8 mb-4">
                <h3>Send us a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Send
                  </button>
                </form>
              </div>
              <div className="col-lg-4 mb-4">
                <h2>Contact Details</h2>
                <div className="contact-details">
                  <div>
                    <strong>Address:</strong> {contactDetails.address}
                  </div>
                  <div>
                    <strong>Contact Number:</strong>{" "}
                    {contactDetails.contactNumber}
                  </div>
                  <div>
                    <strong>Email:</strong> {contactDetails.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    
  );
};

export default ContactUs;
