import axios from "axios";
import React, { useState } from "react";
import "./NeedBlood.css";
import blood_drop_logo from "../../../image/blood_drop_logo.jpg";

function NeedBlood() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [donors, setDonors] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [searched, setSearched] = useState(false); // New state to track if search button was clicked

  const handleBloodGroupChange = (e) => {
    setBloodGroup(e.target.value);
  };

  const handleSearch = () => {
    if (bloodGroup) {
      axios
        .get("http://localhost/blood_back/api/search.php", {
          params: { blood_group: bloodGroup },
        })
        .then((response) => {
          setDonors(response.data);
          setErrorMsg("");
          setSearched(true); // Set searched to true when search is successful
        })
        .catch((error) => {
          setDonors([]);
          setErrorMsg(error.message);
          setSearched(true); // Set searched to true even when search fails
        });
    } else {
      setErrorMsg("Please select a blood group");
      setSearched(false); // Reset searched state when no blood group is selected
    }
  };

  const handleRequestBlood = (donor) => {
    const message = `I have a donor who wants to donate blood. Contact information: ${donor.donor_number}`;
    // You can send the message using your preferred method, such as an API call or email service
    console.log(message);
  };

  return (
    <div className="search-section">
      <div className="container">
        <h2>Search Blood Donors</h2>
        <div className="search-container">
          <select value={bloodGroup} onChange={handleBloodGroupChange} required>
            <option value="" disabled>
              Select Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        {errorMsg && <p className="error-msg">{errorMsg}</p>}

        {searched && donors.length > 0 ? (
          <div className="mt-10">
            <h3>Donors with Blood Group {bloodGroup}</h3>
            <div className="card-container">
              {donors.map((donor, index) => (
                <div key={index} className="card" style={{ width: "300px" }}>
                  <img
                    className="card-img-top"
                    src={blood_drop_logo}
                    alt="Card image"
                    style={{ width: "100%", height: "300px" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{donor.donor_name}</h3>
                    <p className="card-text">
                      <b>Blood Group: </b> <b>{donor.blood_group}</b>
                      <br />
                      <b>Mobile No.: </b> {donor.donor_number}
                      <br />
                      <b>Gender: </b> {donor.donor_gender}
                      <br />
                      <b>date of Birth: </b> {donor.dateBirth_donor}
                      <br />
                      <b>Address: </b> {donor.donor_address}
                      <br />
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleRequestBlood(donor)}
                    >
                      Request Blood
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : searched ? (
          <div className="alert alert-danger">
            No Donor Found For your search Blood group {bloodGroup}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NeedBlood;
