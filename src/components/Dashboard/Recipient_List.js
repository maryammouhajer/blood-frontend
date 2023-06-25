import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Recipient_List() {
  const [recipients, setRecipients] = useState([]);
  const [message, setMessage] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/blood_back/api/recipient.php",
        {
          blood: "blood group", // Replace with the actual blood group value
        }
      );
      setRecipients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(
      "http://localhost/blood_back/api/recipient.php/" + id
    );
    setMessage(res.data.success);
    fetchData();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mt-4">
          <h5 className="mb-4">recipient List</h5>
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

                <th>Availability Day</th>
                <th>Availability Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recipients.map((recipient, index) => (
                <tr key={index}>
                  <td>{recipient.Name}</td>
                  <td>{recipient.ContactNumber}</td>
                  <td>{recipient.RecipientEmail}</td>
                  <td>{recipient.dateBirth_recipient}</td>
                  <td>{recipient.recipient_gender}</td>
                  <td>{recipient.blood_group}</td>
                  <td>{recipient.Address}</td>
                  <td>{recipient.availability_day}</td>
                  <td>{recipient.availability_time}</td>
                  <td>
                    <Link
                      to={"/editrecipient/" + recipient.recipient_id}
                      className="btn btn-success mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(recipient.recipient_id)}
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
  );
}

export default Recipient_List;
