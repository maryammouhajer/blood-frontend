// import React, { useState } from "react";
// import DonorCards from "../../DonorCards";
// import BloodGroupSelect from "../../BloodGroupSelect";

// const NeedBlood = () => {
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [reason, setReason] = useState("");
//   const [donors, setDonors] = useState([]);
//   const [location, setLocation] = useState("");

//   const handleBloodGroupChange = (event) => {
//     setBloodGroup(event.target.value);
//   };

//   const handleReasonChange = (event) => {
//     setReason(event.target.value);
//   };
//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const mockDonors = [

//     ];

//     const filteredDonors = mockDonors.filter(
//       (donor) => donor.location === location
//     );

//     setDonors(filteredDonors);
//   };

//   return (
//     <div className="container-fluid  py-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <h1 className="mb-4">Request Blood</h1>
//             <p className="lead mb-4">
//               Fill out the form below to request blood from our donors.
//             </p>
//             <form name="needblood" onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="bloodGroup" className="font-weight-bold">
//                   Blood Group<span className="text-danger">*</span>
//                 </label>
//                 <BloodGroupSelect
//                   id="bloodGroup"
//                   value={bloodGroup}
//                   onChange={handleBloodGroupChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="reason" className="font-weight-bold">
//                   Reason, why do you need blood?
//                   <span className="text-danger">*</span>
//                 </label>
//                 <textarea
//                   id="reason"
//                   className="form-control"
//                   name="reason"
//                   value={reason}
//                   onChange={handleReasonChange}
//                   required
//                 ></textarea>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="location" className="font-weight-bold">
//                   Your Location
//                 </label>
//                 <input
//                   id="location"
//                   className="form-control"
//                   name="location"
//                   value={location}
//                   onChange={handleLocationChange}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Search
//               </button>
//             </form>
//           </div>
//           <div className="col-md-6">
//             {donors.length > 0 ? (
//               donors.map((donor, index) => (
//                 <DonorCards key={index} {...donor} location={location} />
//               ))
//             ) : (
//               <div className="alert alert-danger mt-4">
//                 No donors found for your blood group, reason, and location.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NeedBlood;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NeedBlood = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost/blood_back/api/needblood.php', {
          blood: 'blood group', // Replace with the actual blood group value
        });
        setDonors(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : donors.length > 0 ? (
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
      ) : (
        <div className="alert alert-danger">No Donor Found for your search blood group</div>
      )}
    </div>
  );
};

export default NeedBlood;
