import React, { useState } from "react";
import DonorCards from "../../DonorCards";
import BloodGroupSelect from "../../BloodGroupSelect";

const NeedBlood = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [reason, setReason] = useState("");
  const [donors, setDonors] = useState([]);

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mockDonors = [
      // Mock donor data
    ];
    setDonors(mockDonors);
  };

  return (
    <div id="page-container" style={{ marginTop: "50px", position: "relative", minHeight: "84vh" }}>
      <div className="container">
        <div id="content-wrap" style={{ paddingBottom: "50px" }}>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-4 mb-3">Need Blood</h1>
            </div>
          </div>
          <form name="needblood" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="font-italic">
                  Blood Group<span style={{ color: "red" }}>*</span>
                </div>
                <BloodGroupSelect
                  value={bloodGroup}
                  onChange={handleBloodGroupChange}
                />
              </div>
              <div className="col-lg-4 mb-4">
                <div className="font-italic">
                  Reason, why do you need blood?
                  <span style={{ color: "red" }}>*</span>
                </div>
                <textarea
                  className="form-control"
                  name="address"
                  value={reason}
                  onChange={handleReasonChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div>
                  <input
                    type="submit"
                    name="search"
                    className="btn btn-primary"
                    value="Search"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            {donors.length > 0 ? (
              donors.map((donor, index) => (
                <DonorCards key={index} {...donor} />
              ))
            ) : (
              <div className="col-lg-12">
                <div className="alert alert-danger">
                  No Donor Found For your search Blood group
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedBlood;
