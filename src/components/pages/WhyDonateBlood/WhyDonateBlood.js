import React from "react";
import whatisdonated from "../../../image/whatisdonated.png"
const WhyDonateBlood = () => {
  const transfusionNeeds = [
    "women with complications of pregnancy, such as ectopic pregnancies and haemorrhage before, during or after childbirth.",
    "children with severe anaemia often resulting from malaria or malnutrition.",
    "people with severe trauma following man-made and natural disasters.",
    "many complex medical and surgical procedures and cancer patients.",
  ];

  return (
    <div id="page-container" style={{ marginTop: "50px", position: "relative", minHeight: "84vh" }}>
      <div className="container">
        <div id="content-wrap" style={{ paddingBottom: "50px" }}>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-4 mb-3">Why Should I Donate Blood?</h1>
              <p>
                <span style={{ color: "rgb(0, 0, 0)", fontFamily: "Open Sans, Arial, sans-serif", fontSize: "14px", textAlign: "justify" }}>
                  Blood is the most precious gift that anyone can give to another person — the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components — red cells, platelets, and plasma — which can be used individually for patients with specific conditions. Safe blood saves lives and improves health. Blood transfusion is needed for:
                </span>
              </p>
              <ul>
                {transfusionNeeds.map((need, index) => (
                  <li key={index}>{need}</li>
                ))}
              </ul>
              <br />
              <span style={{ color: "rgb(0, 0, 0)", fontFamily: "Open Sans, Arial, sans-serif", fontSize: "14px", textAlign: "justify" }}>
                It is also needed for regular transfusions for people with conditions such as thalassaemia and sickle cell disease and is used to make products such as clotting factors for people with haemophilia. There is a constant need for regular blood supply because blood can be stored for only a limited time before use. Regular blood donations by a sufficient number of healthy people are needed to ensure that safe blood will be available whenever and wherever it is needed.
              </span>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid rounded" src={{whatisdonated}} style={{ height: "600px", width: "500px" }} alt="error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDonateBlood;
