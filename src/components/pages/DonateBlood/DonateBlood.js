import axios from "axios";
import React, { useState } from "react";

const DonateBlood = () => {
  const [donor, setDonor] = useState({
    donor_name: "",
    donor_number: "",
    donor_email: "",
    dateBirth_donor: "",
    donor_gender: "",
    blood_group: "",
    donor_address: "",
    diseases: "",
    availability_date: "",
    availability_time: "",
    last_time_donor: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form inputs
    const errors = {};
    if (!donor.donor_name) {
      errors.donor_name = "Please enter your name";
    }
    if (!donor.donor_number) {
      errors.donor_number = "Please enter your phone number";
    }
    if (!donor.donor_email) {
      errors.donor_email = "Please enter your email";
    }
    if (!donor.dateBirth_donor) {
      errors.dateBirth_donor = "Please enter your date of birth";
    }
    if (!donor.donor_gender) {
      errors.donor_gender = "Please select your gender";
    }
    if (!donor.blood_group) {
      errors.blood_group = "Please select your blood group";
    }
    if (!donor.donor_address) {
      errors.donor_address = "Please enter your address";
    }
    if (!donor.availability_date) {
      errors.availability_date = "Please select your availability date";
    }
    if (!donor.availability_time) {
      errors.availability_time = "Please select your availability time";
    }
    if (!donor.last_time_donor) {
      errors.last_time_donor = "Please select when you last donated blood";
    }
    if (Object.keys(errors).length === 0) {
      // Submit form
      console.log(donor); // Log donor object for testing purposes

      axios
        .post("http://localhost/blood_back/api/savedata.php", donor, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
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
      setDonor({
        donor_name: "",
        donor_number: "",
        donor_email: "",
        dateBirth_donor: "",
        donor_gender: "",
        blood_group: "",
        donor_address: "",
        diseases: "",
        availability_date: "",
        availability_time: "",
        last_time_donor: "",
      });
      setErrors({}); // Clear the errors state after successful form submission
    } else {
      // Set the errors state with the validation errors
      setErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonor((prevDonor) => ({ ...prevDonor, [name]: value }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center text-danger mb-4">Donate Blood</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="donor_name">Name</label>
              <input
                type="text"
                className="form-control"
                name="donor_name"
                id="donor_name"
                value={donor.donor_name}
                onChange={handleChange}
                required
              />
              {errors.donor_name && (
                <p className="text-danger">{errors.donor_name}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="donor_number">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="donor_number"
                id="donor_number"
                value={donor.donor_number}
                onChange={handleChange}
                required
              />
              {errors.donor_number && (
                <p className="text-danger">{errors.donor_number}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="donor_email">Email</label>
              <input
                type="email"
                className="form-control"
                name="donor_email"
                id="donor_email"
                value={donor.donor_email}
                onChange={handleChange}
                required
              />
              {errors.donor_email && (
                <p className="text-danger">{errors.donor_email}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="dateBirth_donor">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dateBirth_donor"
                id="dateBirth_donor"
                value={donor.dateBirth_donor}
                onChange={handleChange}
                required
              />
              {errors.dateBirth_donor && (
                <p className="text-danger">{errors.dateBirth_donor}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="donor_gender">Gender</label>
              <select
                className="form-control"
                name="donor_gender"
                id="donor_gender"
                value={donor.donor_gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="">Male</option>
                <option value="female">Female</option>
              </select>

              {errors.donor_gender && (
                <p className="text-danger">{errors.donor_gender}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="blood_group">Blood Group</label>
              <select
                className="form-control"
                name="blood_group"
                id="blood_group"
                value={donor.blood_group}
                onChange={handleChange}
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              {errors.blood_group && (
                <p className="text-danger">{errors.blood_group}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="donor_address">Address</label>
              <textarea
                className="form-control"
                name="donor_address"
                id="donor_address"
                value={donor.donor_address}
                onChange={handleChange}
                required
              />
              {errors.donor_address && (
                <p className="text-danger">{errors.donor_address}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="diseases">Diseases or Medical Conditions</label>
              <textarea
                className="form-control"
                name="diseases"
                id="diseases"
                value={donor.diseases}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="availability_date">Availability Date</label>
              <input
                type="date"
                className="form-control"
                name="availability_date"
                id="availability_date"
                value={donor.availability_date}
                onChange={handleChange}
                required
              />
              {errors.availability_date && (
                <p className="text-danger">{errors.availability_date}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="availability_time">Availability Time</label>
              <input
                type="time"
                className="form-control"
                name="availability_time"
                id="availability_time"
                value={donor.availability_time}
                onChange={handleChange}
                required
              />
              {errors.availability_time && (
                <p className="text-danger">{errors.availability_time}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="last_time_donor">
                When did you last donate blood?
              </label>
              <input
                type="date"
                className="form-control"
                name="last_time_donor"
                id="last_time_donor"
                value={donor.last_time_donor}
                onChange={handleChange}
                required
              />
              {errors.last_time_donor && (
                <p className="text-danger">{errors.last_time_donor}</p>
              )}
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;
