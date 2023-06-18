import React, { useState } from "react";
import axios from "axios";
import "./Recipient.css";

const Recipient = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [address, setAddress] = useState("");
 // const [recipientData, setRecipientData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      contactNumber,
      recipientEmail,
      address,
    };

    axios
      .post("http://localhost/blood_back/api/recipient.php", formData)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        // Update the recipient data
      //  setRecipientData((prevData) => [...prevData, formData]);
      })
      .catch((error) => {
        // Handle the error if needed
        console.error(error);
      });

    // Reset the form after submission
    setName("");
    setContactNumber("");
    setRecipientEmail("");
    setAddress("");
  };

  return (
    <div className="recipient-form">
      <h2>Recipient Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="recipientEmail">Recipient Email:</label>
          <input
            type="email"
            id="recipientEmail"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Recipient;
