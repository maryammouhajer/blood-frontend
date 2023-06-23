import React, { useState, useEffect } from "react";
import axios from "axios";
import blood_drop_logo from "../../image/blood_drop_logo.jpg";
const DonorCards = ({ donor, handleRequestBlood }) => {
  const handleClick = () => {
    handleRequestBlood(donor);
  };
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/blood_back/api/donor.php",
          {
            blood: "blood group", // Replace with the actual blood group value
          }
        );
        setDonors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        {donors.map((donor) => (
          <div
            className="col-lg-4 col-sm-6 portfolio-item"
            key={donor.donor_id}
          >
            <br />
            <div className="card" style={{ width: "300px" }}>
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
                <button className="btn btn-primary" onClick={handleClick}>
                  Request Blood
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorCards;
