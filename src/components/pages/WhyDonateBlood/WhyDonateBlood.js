import React from "react";
import whatisdonated from "../../../image/whatisdonated.png";
import './WhyDonateBlood.css';
const WhyDonateBlood = () => {
  const transfusionNeeds = [

  ];
  return (
    <div className="container">
      <div
        id="page-container"
        style={{
          marginTop: "0rem",
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden", // Hide horizontal scrollbar
        }}
      >
        <div className="container" style={{ width: "100%", maxWidth: "100%" }}>
          <div id="content-wrap" style={{ marginBottom: "20px" }}>
            <div className="row">
              <div className="col-lg-6">
                <h1 className="mt-4 mb-3">Why Should I Donate Blood?</h1>
                <p className="paragraph">

                  Donating blood is an incredibly powerful way to save lives and make a positive impact in your community. Blood transfusions are needed for a wide variety of medical procedures, including surgeries, cancer treatments, and emergency care. </p>
                <p className="paragraph">
                  By donating blood, you can help ensure that there is a steady and reliable supply of blood and blood products for those in need. Every donation has the potential to save up to three lives, and it only takes a small amount of your time to make a big difference.
                </p>
                <p className="paragraph">
                  And here's another example:

                  In addition to the lifesaving benefits of donating blood, there are also health benefits for the donor. Regular blood donation can help reduce the risk of heart disease, stroke, and other health issues. It can also help your body replenish its blood supply, stimulate the production of new blood cells, and improve blood flow. By donating blood, you can not only help others in need, but also improve your own health and well-being.
                </p>

                <ul>
                  {transfusionNeeds.map((need, index) => (
                    <li key={index}>{need}</li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <img className="img-fluid rounded" src={whatisdonated} alt="error" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WhyDonateBlood;
