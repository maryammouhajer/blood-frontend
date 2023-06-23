import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AboutUs.css";
import about from "../../../image/about.jpg";

function AboutUs() {
  const [pageData, setPageData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/blood_back/api/about.php"
      );
      setPageData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="about-container col-12">
      <div className="row">
        <div className="col-lg-6">
          <div className="about-content">
            <h1 className="about-heading">About Us</h1>
            <p>
              <span className="about-text">{pageData}</span>
            </p>
          </div>
        </div>
        <div className="col-lg-6 ">
          <img
            className="img-fluid rounded about-image"
            src={about}
            alt="error"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
