import React, { useEffect, useState } from "react";

function Home() {
  const [donorCount, setDonorCount] = useState(0);

  useEffect(() => {
    // Replace the commented PHP code with appropriate API call to fetch donor count
    // Example API call using fetch:
    fetch("http://localhost/blood_back/api/donor.php/")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the response data contains a 'count' property with donor count
        setDonorCount(data.count);
      })
      .catch((error) => {
        console.log("Error fetching donor count:", error);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 lg-12 sm-12">
          <h2 className="text-center text-danger mb-4"> Admin Dashboard</h2>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-3">
          <div
            className="panel panel-default panel-info"
            style={{ borderRadius: "50px" }}
          >
            <div
              className="panel-body panel-info bk-primary  "
              style={{
                backgroundColor: "#D6EAF8",
                borderRadius: "50px",
                paddingTop: "40px",
              }}
            >
              <div className="stat-panel text-center">
                <div className="stat-panel-number h1">{donorCount}</div>
                <div className="stat-panel-title text-uppercase">
                  Blood Donors Available{" "}
                </div>
                <br />
                <button
                  className="btn btn-danger"
                  style={{ marginBottom: "40px" }}
                  onClick={() => (window.location.href = "DonorList")}
                >
                  Full Detail <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="panel panel-default panel-info"
            style={{ borderRadius: "50px" }}
          >
            <div
              className="panel-body panel-info bk-primary  "
              style={{
                backgroundColor: "#ABEBC6",
                borderRadius: "50px",
                paddingTop: "40px",
              }}
            >
              <div className="stat-panel text-center">
                <div className="stat-panel-number h1"></div>
                <div className="stat-panel-title text-uppercase">
                  All User Queries{" "}
                </div>
                <br />
                <button
                  className="btn btn-danger"
                  style={{ marginBottom: "40px" }}
                  onClick={() => (window.location.href = "Recipient_List")}
                >
                  Full Detail <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="panel panel-default panel-info"
            style={{ borderRadius: "50px" }}
          >
            <div
              className="panel-body panel-info bk-primary"
              style={{
                backgroundColor: "#E8DAEF",
                borderRadius: "50px",
                paddingTop: "40px",
              }}
            >
              <div className="stat-panel text-center">
                <div className="stat-panel-number h1"></div>
                <div className="stat-panel-title text-uppercase">
                  Pending Queries
                </div>
                <br />
                <button
                  className="btn btn-danger"
                  style={{ marginBottom: "40px" }}
                  onClick={() => (window.location.href = "Contact_Query")}
                >
                  Full Detail <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
