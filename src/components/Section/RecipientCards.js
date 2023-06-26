import axios from 'axios';
import React, { useEffect, useState } from 'react'
import bloodrecipient from "../../image/logo.jpg"
function RecipientCards(recipient) {
    const [recipients, SetRecipients] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost/blood_back/api/recipient.php",recipient,
            {
              blood: "blood group", // Replace with the actual blood group value
            }
          );
          SetRecipients(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <div className="row">
        {recipients.map((recipient, index) => (
       
            <div
              className="col-lg-4 col-sm-6 portfolio-item"
              key={index}
            >
              <br />
              <div className="card" >
                <img
                  className="card-img-top"
                 src={bloodrecipient}
                  alt="Card image"
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">{recipient.Name}</h3>
                  <p className="card-text">
                    <b>Blood Group: </b> <b>{recipient.blood_group}</b>
                    <br />
                    <b>Recipient Email: </b> <b>{recipient.RecipientEmail}</b>
                    <br />
                    <b>Contact Number: </b> {recipient.ContactNumber}
                    <br />
                    <b>Gender: </b> {recipient.recipient_gender}
                    <br />
                    <b>date of Birth: </b> {recipient.dateBirth_recipient}
                    <br />
                    <b>Address: </b> {recipient.Address}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default RecipientCards
