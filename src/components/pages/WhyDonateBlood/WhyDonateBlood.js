import React from "react";
import whatisdonated from "../../../image/whatisdonated.png";

const WhyDonateBlood = () => {
  const transfusionNeeds = [
    
  ];



  
  return (
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
                <span>
                Donating blood is an important act of kindness and generosity that can have a positive impact on the lives of people in need. Here are some reasons why you may want to consider donating blood:

Saves lives: Blood transfusions are a critical component of medical treatments for patients who require blood due to medical conditions, surgeries, injuries, or other emergencies. By donating blood, you can help save the lives of people in need.

Shortage of blood supply: Blood banks and hospitals often face shortages of blood supply, especially during emergencies or disasters. By donating blood, you can help ensure that the blood supply is sufficient to meet the needs of patients.

Easy and safe: Donating blood is a simple and safe process that involves a health checkup and a needle prick. The entire process takes less than an hour, and the needle prick is usually painless.

Free health checkup: Before donating blood, you will receive a health checkup that includes screening for various health conditions, such as anemia, high blood pressure, and infectious diseases. This can help you identify any health issues early on and receive treatment if necessary.

Helps the community: Donating blood is a way to give back to your community and make a positive impact on the lives of people in need. It's a selfless act of kindness that can help save lives and improve the health and wellbeing of others.
                </span>
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
  );
};


export default WhyDonateBlood;
