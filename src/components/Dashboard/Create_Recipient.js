import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create_Recipient = () => {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState({
    RecipientID: "",
    Name: "",
    ContactNumber: "",
    RecipientEmail: "",
    Address: "",
    recipient_gender: "",
    blood_group: "",

    availability_day: "",
    availability_time: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form inputs
    const errors = {};
    if (!recipient.Name) {
      errors.Name = "Please enter your name";
    }
    if (!recipient.ContactNumber) {
      errors.ContactNumber = "Please enter your phone number";
    }
    if (!recipient.RecipientEmail) {
      errors.RecipientEmail = "Please enter your email";
    }
    if (!recipient.Address) {
      errors.Address = "Please enter your Address";
    }

    if (Object.keys(errors).length === 0) {
      // Submit form
      console.log(recipient); // Log Recipient object for testing purposes

      axios
        .post("http://localhost/blood_back/api/recipient.php", recipient, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            // Handle successful form submission
            console.log("Form submitted successfully!");
            setTimeout(() => {
              navigate("/admin/dashboard/Recipient_List");
            }, 2000);
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
      setRecipient({
        Name: "",
        ContactNumber: "",
        RecipientEmail: "",
        Address: "",
        recipient_gender: "",
        blood_group: "",

        availability_day: "",
        availability_time: "",
      });

      setErrors({}); // Clear the errors state after successful form submission
    } else {
      // Set the errors state with the validation errors
      setErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipient((prevRecipient) => ({ ...prevRecipient, [name]: value }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center text-danger mb-4">Add Recipient</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                name="Name"
                id="RecipientID"
                value={recipient.Name}
                onChange={handleChange}
                required
              />
              {errors.Name && <p className="text-danger">{errors.Name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="ContactNumber">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="ContactNumber"
                id="RecipientID"
                value={recipient.ContactNumber}
                onChange={handleChange}
                required
              />
              {errors.ContactNumber && (
                <p className="text-danger">{errors.ContactNumber}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="RecipientEmail">Email</label>
              <input
                type="email"
                className="form-control"
                name="RecipientEmail"
                id="RecipientEmail"
                value={recipient.RecipientEmail}
                onChange={handleChange}
                required
              />
              {errors.RecipientEmail && (
                <p className="text-danger">{errors.RecipientEmail}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="dateBirth_recipient">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dateBirth_recipient"
                id="dateBirth_recipient"
                value={recipient.dateBirth_recipient}
                onChange={handleChange}
                required
              />
              {errors.dateBirth_recipient && (
                <p className="text-danger">{errors.dateBirth_recipient}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="recipient_gender">Gender</label>
              <select
                className="form-control"
                name="recipient_gender"
                id="recipient_gender"
                value={recipient.recipient_gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              {errors.recipient_gender && (
                <p className="text-danger">{errors.recipient_gender}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="blood_group">Blood Group</label>
              <select
                className="form-control"
                name="blood_group"
                id="blood_group"
                value={recipient.blood_group}
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
              <label htmlFor="Address">Address</label>
              <input
                type="Address"
                className="form-control"
                name="Address"
                id="Address"
                value={recipient.Address}
                onChange={handleChange}
                required
              />
              {errors.Address && (
                <p className="text-danger">{errors.Address}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="availability_day">Availability Day</label>
              <select
                className="form-control"
                name="availability_day"
                id="availability_day"
                value={recipient.availability_day}
                onChange={handleChange}
                required
              >
                <option value="">Select Availability Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
              {errors.availability_day && (
                <p className="text-danger">{errors.availability_day}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="availability_time">Availability Time</label>
              <select
                className="form-control"
                name="availability_time"
                id="availability_time"
                value={recipient.availability_time}
                onChange={handleChange}
                required
              >
                <option value="">Select Availability Time</option>
                <option value="8am to 2pm">8am to 2pm</option>
                <option value="2pm to 6pm">2pm to 6pm</option>
              </select>
              {errors.availability_time && (
                <p className="text-danger">{errors.availability_time}</p>
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

export default Create_Recipient;
