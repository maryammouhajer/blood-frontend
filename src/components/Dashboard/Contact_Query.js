import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Contact_Query() {
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost/blood_back/api/contact_query.php")
      .then((response) => response.json())
      .then((data) => {
        setQueryData(data);
      })
      .catch((error) => {
        console.log("Error fetching query data:", error);
      });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-bordered" style={{ textAlign: "center" }}>
        <thead style={{ textAlign: "center" }}>
          <th style={{ textAlign: "center" }}>S.no</th>
          <th style={{ textAlign: "center" }}>Name</th>
          <th style={{ textAlign: "center" }}>Email Id</th>
          <th style={{ textAlign: "center" }}>Mobile Number</th>
          <th style={{ textAlign: "center" }}>Message</th>
          <th style={{ textAlign: "center" }}>Status</th>
          <th style={{ textAlign: "center" }}>Action</th>
        </thead>
        <tbody>
          {queryData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.contactname}</td>
              <td>{row.contactemail}</td>
              <td>{row.contactnumber}</td>
              <td>{row.contactmessage}</td>
              {row.query_status === 1 ? (
                <td>
                  Read
                  <br />
                </td>
              ) : (
                <td>
                  <a>
                    <b id="demo">Pending</b>
                  </a>
                  <br />
                </td>
              )}
              <td style={{ width: "100px" }}>
                <a
                  style={{ backgroundColor: "aqua" }}
                  href={`delete_query.php?id=${row.query_id}`}
                >
                  {" "}
                  Delete{" "}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contact_Query;
