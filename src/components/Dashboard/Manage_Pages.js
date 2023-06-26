// import React from "react";

// function Manage_Pages() {
//   return (
//     <div>
//       {" "}
//       <div id="content">
//         <div className="content-wrapper">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-md-12 lg-12 sm-12">
//                 <h1 className="page-title">Manage Page Data</h1>
//               </div>
//             </div>
//             <hr />
//             {/* <?php
// $limit = 3;
// if(isset($_GET['page'])){
//   $page = $_GET['page'];
// }else{
//   $page = 1;
// }
// $offset = ($page - 1) * $limit;
// $count=$offset+1;
//   $sql= "select * from pages LIMIT {$offset},{$limit} ";
//   $result=mysqli_query($conn,$sql);
//   if(mysqli_num_rows($result)>0)   {
//  ?> */}

//             <div className="table-responsive">
//               <table
//                 className="table table-bordered"
//                 style={{ textAlign: "center" }}
//               >
//                 <thead style={{ textAlign: "center" }}>
//                   <th style={{ textAlign: "center" }}>S.no</th>
//                   <th style={{ textAlign: "center" }}>Page Name</th>
//                   <th style={{ textAlign: "center" }}>Page Type</th>
//                   <th style={{ textAlign: "center" }}>Page Data</th>
//                   <th style={{ textAlign: "center" }}>Edit Page</th>
//                 </thead>
//                 <tbody>
//                   {/* <?php
//       while($row = mysqli_fetch_assoc($result)) { ?> */}
//                   <tr>
//                     <td>{/* <?php echo  $count++; ?> */}</td>
//                     <td>{/* <?php echo $row['page_name']; ?> */}</td>
//                     <td>{/* <?php echo $row['page_type']; ?> */}</td>
//                     <td id="example" style={{ textAlign: "left" }}>
//                       <div
//                         style={{
//                           width: "100%",
//                           maxHeight: "110px",
//                           overflow: "auto",
//                         }}
//                       >
//                         {/* <?php echo $row['page_data']; ?> */}
//                       </div>
//                     </td>
//                     <td id="he" style={{ widh: "100px" }}>
//                       {/* <a style="background-color:aqua" href='update_page_details.php?type=<?php echo $row['page_type'];?>'> <span className="glyphicon glyphicon-edit"></span></a>
//                        */}
//                     </td>
//                   </tr>
//                   {/* <?php } ?> */}
//                 </tbody>
//               </table>
//             </div>
//             {/* <?php } ?> */}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Manage_Pages;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Manage_Pages() {
  const [pages, setPages] = useState([]);

  // Fetch data from API endpoint
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/blood_back/api/pages.php"
      );
      setPages(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Rest of the component code */}
      <div className="table-responsive">
        <table className="table table-bordered" style={{ textAlign: "center" }}>
          {/* Table headers */}
          <thead style={{ textAlign: "center" }}>
            <th style={{ textAlign: "center" }}>S.no</th>
            <th style={{ textAlign: "center" }}>Page Name</th>
            <th style={{ textAlign: "center" }}>Page Type</th>
            <th style={{ textAlign: "center" }}>Page Data</th>
            <th style={{ textAlign: "center" }}>Edit Page</th>
          </thead>
          <tbody>
            {/* Map through the fetched pages data */}
            {pages.map((page, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{page.page_name}</td>
                <td>{page.page_type}</td>
                <td style={{ textAlign: "left" }}>
                  <div
                    style={{
                      width: "100%",
                      maxHeight: "110px",
                      overflow: "auto",
                    }}
                  >
                    {page.page_data}
                  </div>
                </td>
                <td style={{ width: "100px" }}>
                  
                  <Link
                    to={"admin/dashboard/updatepage/" + page.page_id}
                    className="btn btn-success mx-2"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {/* Add your pagination component or code here */}
    </div>
  );
}

export default Manage_Pages;
