import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

const ContactUs = () => {
  // const navigate = useNavigate();
  const [formvalue, setFormvalue] = useState({
    contactname: "",
    contactemail: "",
    contactnumber: "",
    message: "",
  });

  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formvalue);
    const formData = {
      contactname: formvalue.contactname,

      contactemail: formvalue.contactemail,
      contactnumber: formvalue.contactnumber,
      contactmessage: formvalue.contactmessage,
    };
    axios
      .post("http://localhost/blood_back/api/contact_query.php", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          // Handle successful form submission
          console.log("Form submitted successfully!");
        } else {
          // Handle error response from the server
          console.log("An error occurred while submitting the form.");
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error("An error occurred:", error);
      });

    // Clear form fields
    setFormvalue({
      contactname: "",
      contactemail: "",
      contactnumber: "",
      contactmessage: "",
    });
  };

  const contactDetails = {
    address: "123 Main Street, City, Country",
    contactNumber: "+1 123-456-7890",
    email: "example@example.com",
  };

  return (
    <div className="container-fluid  py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-4 ">Contact Us</h1>
            <p className="lead mb-4">
              Fill out the form below to send us a message.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-2">Fullname </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="contactname"
                    value={formvalue.contactname}
                    className="form-control"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2">Email</label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="contactemail"
                    value={formvalue.contactemail}
                    className="form-control"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2">phoneNumber</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="contactnumber"
                    value={formvalue.contactnumber}
                    className="form-control"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2">message</label>
                <div className="col-sm-10">
                  <textarea
                    name="contactmessage"
                    value={formvalue.contactmessage}
                    onChange={handleInput}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2"></label>
                <div className="col-sm-10">
                  <button name="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
          <h1 className="mb-4 center">Contact Details</h1>
            <div className="contact-details">
              <div>
                <strong>Address:</strong> {contactDetails.address}
              </div>
              <div>
                <strong>Contact Number:</strong> {contactDetails.contactNumber}
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
