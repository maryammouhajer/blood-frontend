// import React from "react";

// const DonorCards = () => {
//   const donor = [
//     {
//       donor_name: "John Doe",
//       donor_number: "1234567890",
//       donor_email: "johndoe@example.com",
//       donor_gender: "Male",
//       donor_blood: "A+",
//       donor_address: "123 Main St, City, Country",
//       avaibility_date: "2023-06-01",
//       avaibility_time: "09:00 AM",
//       last_time_donor: "2022-12-01",
//     },
//     {
//       donor_name: "Jane Smith",
//       blood_group: "B+",
//       donor_number: "9876543210",
//       donor_gender: "Female",
//       dateBirth_donor: "1995-05-05",
//       donor_address: "456 XYZ Avenue",
//       avaibility_date: "2023-06-01",
//       avaibility_time: "09:00 AM",
//       last_time_donor: "2022-12-01",
//     },
//   ];
//   return (
//     <div className="col-lg-4 col-sm-6 portfolio-item" >
//       <br />
//       <div className="card" style={{ width: "300px" }}>
//         <img
//           className="card-img-top"
//           src="image/blood_drop_logo.jpg"
//           alt="Card image"
//           style={{ width: "100%", height: "300px" }}
//         />
//         <div className="card-body">
//           <h3 className="card-title">{donor.donor_name}</h3>
//           <p className="card-text">
//             <b>Blood Group: </b> <b>{donor.donor_blood}</b>
//             <br />
//             <b>Mobile No.: </b> {donor.donor_number}
//             <br />
//             <b>Gender: </b>
//             {donor.donor_gender}
//             <br />
//             <b>Address: </b> {donor.donor_address}
//             <br />
//             <b>Email: </b> {donor.donor_email}
//             <br />
//             <b>Availability Date: </b> {donor.avaibility_date}
//             <br />
//             <b>Availability Time: </b> {donor.avaibility_time}
//             <br />
//             <b>Last Time Donated: </b> {donor.last_time_donor}
//             <br />
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonorCards;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonorCards = (donor) => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/blood_back/api/donor.php', {
          blood: 'blood group', // Replace with the actual blood group value
        });
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
            <div className="col-lg-4 col-sm-6 portfolio-item" key={donor.donor_id}>
              <br />
              <div className="card" style={{ width: '300px' }}>
                <img className="card-img-top" src="image\blood_drop_logo.jpg" alt="Card image" style={{ width: '100%', height: '300px' }} />
                <div className="card-body">
                  <h3 className="card-title">{donor.donor_name}</h3>
                  <p className="card-text">
                    <b>Blood Group: </b> <b>{donor.blood_group}</b>
                    <br />
                    <b>Mobile No.: </b> {donor.donor_number}
                    <br />
                    <b>Gender: </b> {donor.donor_gender}
                    <br />
                    <b>Age: </b> {donor.donor_age}
                    <br />
                    <b>Address: </b> {donor.donor_address}
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

export default DonorCards;

