import React, { useState } from "react";
import BloodGroupSelect from "../../BloodGroupSelect";

const DonateBlood = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [donor, setDonor] = useState({
    donor_name: "",
    donor_number: "",
    donor_email: "",
    dateBirth_donor: "",
    donor_gender: "",
    donor_blood: "",
    donor_address: "",
    diseases: "",
    avaibility_date: "",
    avaibility_time: "",
    last_time_donor: "",
  });

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(donor);
  };

  return (
    <div className="container">
      <h2>Donate Blood</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="donor_name"
            value={donor.donor_name}
            onChange={handleChange}
          required/>
        </div>
        <div>
          <label>Number:</label>
          <input
            type="text"
            name="donor_number"
            value={donor.donor_number}
            onChange={handleChange}
            required/>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="donor_email"
            value={donor.donor_email}
            onChange={handleChange}
            required/>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateBirth_donor"
            value={donor.dateBirth_donor}
            onChange={handleChange}
            required/>
        </div>
        <div>
          <label>Gender:</label>
          <select
          className="form-control"
            name="donor_gender"
            value={donor.donor_gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Blood Group:</label>
          <BloodGroupSelect
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="donor_address"
            value={donor.donor_address}
            onChange={handleChange}
            required></textarea>
        </div>
        <div>
          <label>Diseases:</label>
          <input
            type="text"
            name="diseases"
            value={donor.diseases}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Availability Date:</label>
          <input
            type="date"
            name="avaibility_date"
            value={donor.avaibility_date}
            onChange={handleChange}
            required/>
        </div>
        <div>
          <label>Availability Time:</label>
          <input
            type="time"
            name="avaibility_time"
            value={donor.avaibility_time}
            onChange={handleChange}
            required/>
        </div>
        <div>
          <label>Last Time Donated:</label>
          <input
            type="date"
            name="last_time_donor"
            value={donor.last_time_donor}
            onChange={handleChange}
            required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonateBlood;
