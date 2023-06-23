import React, { useState, useEffect } from "react";
import axios from "axios";

const ContentCard = ({ pageType }) => {
  const [pageData, setPageData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://localhost/blood_back/api/home.php?page_type=${pageType}`
      );
      setPageData(response.data.page_data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="card">
      <h4 className="card-header bg-info text-white">{pageType}</h4>
      <p
        className="card-body overflow-auto"
        style={{ paddingLeft: "2%", height: "280px", textAlign: "left" }}
      >
        {pageData}
      </p>
    </div>
  );
};

export default ContentCard;
