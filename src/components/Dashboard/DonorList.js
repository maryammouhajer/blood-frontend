import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Donorlist() {
  const [donors, setDonors] = useState([]);
  const [message, setMessage] = useState("");

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

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(
      "http://localhost/blood_back/api/donor.php/" + id
    );
    setMessage(res.data.success);
    fetchData();
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mt-4">
            <h5 className="mb-4">Donor List</h5>
            <p className="text-danger">{message}</p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Email</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Blood Group</th>
                  <th>Address</th>
                  <th>Diseases</th>
                  <th>Availability Day</th>
                  <th>Availability Time</th>
                  <th>Last Time Donor</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {donors.map((donor) => (
                  <tr key={donor.donor_id}>
                    <td>{donor.donor_name}</td>
                    <td>{donor.donor_number}</td>
                    <td>{donor.donor_email}</td>
                    <td>{donor.dateBirth_donor}</td>
                    <td>{donor.donor_gender}</td>
                    <td>{donor.blood_group}</td>
                    <td>{donor.donor_address}</td>
                    <td>{donor.diseases}</td>
                    <td>{donor.availability_day}</td>
                    <td>{donor.availability_time}</td>
                    <td>{donor.last_time_donor}</td>
                    <td>
                      <Link
                        to={"/editdonor/" + donor.donor_id}
                        className="btn btn-success mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(donor.donor_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Donorlist;
