import axios from "axios";
import React, { useState } from "react";

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    Name: "",
    blood__id: "",
    location: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/api/request_blood.php",
        formData
      );
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        value={formData.Name}
        onChange={handleInputChange}
        placeholder="Recipient Name"
        required
      />
      <input
        type="text"
        name="blood__id"
        value={formData.blood__id}
        onChange={handleInputChange}
        placeholder="Blood Type"
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        placeholder="Location"
        required
      />
      {/* Add more form fields as needed */}
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default BloodRequest;
