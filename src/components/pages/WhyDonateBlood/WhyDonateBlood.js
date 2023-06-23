import React, { useEffect, useState } from "react";
import axios from "axios";
import whatisdonated from "../../../image/whatisdonated.png";
import './WhyDonateBlood.css'
const WhyDonateBlood = () => {
  const [pageData, setPageData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/blood_back/api/why_donate_blood.php"
      );
      setPageData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="col-12">
      <div className="container" style={{ width: "100%", maxWidth: "100%" }}>
        <div id="content-wrap" style={{ marginBottom: "0px" }}>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-heading">Why Should I Donate Blood?</h1>
              <p className="paragraph">
                <span className="data-text">{pageData}</span>
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid rounded image-section"
                src={whatisdonated}
                alt="error"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDonateBlood;
