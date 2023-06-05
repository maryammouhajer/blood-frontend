import React from "react";
import banner from "../../../image/banner.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  const aboutData = [
    {
      heading: "About Us",
      content: `Blood bank is a place where blood bag that is collected from blood donation events is stored in one place. The term “blood bank” refers to a division of a hospital laboratory where the storage of blood product occurs and where proper testing is performed to reduce the risk of transfusion related events. The process of managing the blood bag that is received from the blood donation events needs a proper and systematic management. The blood bag must be handled with care and treated thoroughly as it is related to someone’s life. The development of Web-based Blood Bank And Donation Management System (BBDMS) is proposed to provide a management functional to the blood bank in order to handle the blood bag and to make entries of the individuals who want to donate blood and who are in need.`,
      image: banner,
      alt: "About Us",
    },
    // Add more data for additional sections if needed
  ];
  return (
    <div className="about-container">
      <div className="container">
        {aboutData.map((section, index) => (
          <div className="row" key={index}>
            <div className="col-lg-6">
              <h1 className="about-heading">{section.heading}</h1>
              <p className="about-content">{section.content}</p>
            </div>
            <div className="col-lg-6">
              <div className="about-image-container">
                <img
                  className="about-image"
                  src={section.image}
                  alt={section.alt}
                  style={{ marginTop: "100px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
