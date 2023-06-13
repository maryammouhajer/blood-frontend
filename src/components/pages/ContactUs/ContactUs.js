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
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4">Contact Us</h1>
            <p className="lead mb-4">
              Fill out the form below to send us a message.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName" className="font-weight-bold">
                  Full Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber" className="font-weight-bold">
                  Phone Number<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="font-weight-bold">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="font-weight-bold">
                  Message<span className="text-danger">*</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6">
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