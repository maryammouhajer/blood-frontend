
import React from "react";
import bloodFactsImage from "../../../image/Blood-facts_10-illustration-graphics__canteen.png";
import save from "../../../image/save.png";
import "./Home.css";
import DonorCards from "../../Section/DonorCards";
import RecipientCards from "../../Section/RecipientCards";

import ContentCard from "../../Section/ContentCard";
import axios from "axios";

const Home = () => {
  const carouselImagesData = [
    { src: save, alt: "logo" },
    { src: bloodFactsImage, alt: "Blood Facts Image" },
  ];

  const handleRequestBlood = (donor) => {
     return axios.post("http://localhost/blood_back/api/request_blood", donor);
  };

  const universalDonorsData = [
    {
      heading: "Universal Donors and Recipients",
      content:
        "The most common blood type is O, followed by type A. Type O individuals are often called 'universal donors' since their blood can be transfused into persons with any blood type. Those with type AB blood are called 'universal recipients' because they can receive blood of any type. For emergency transfusions, blood group type O negative blood is the variety of blood that has the lowest risk of causing serious reactions for most people who receive it. Because of this, it's sometimes called the universal blood donor type.",
      buttonLabel: "Become a Donor",
      buttonLink: "DonateBlood",
    },
  ];

  return (
    <div className="container">
      <div className="container-fluid position-relative ">
        <div
          className="row no-lines position-absolute"
          style={{ top: "0", paddingBottom: "0px" }}
        >
          <div className="col"></div>
        </div>

        <div className="row mt-4 align-items-center">
          <div className="col">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                {carouselImagesData.map((image, index) => (
                  <li
                    key={index}
                    data-target="#demo"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  ></li>
                ))}
              </ul>
              <div className="carousel-inner">
                {carouselImagesData.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="d-block w-100"
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <ContentCard pageType="needforblood" />
            </div>
            <div className="col-lg-4 mb-4">
              <ContentCard pageType="bloodtips" />
            </div>
            <div className="col-lg-4 mb-4">
              <ContentCard pageType="whoyouhelp" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Blood Donor Names</h2>
        {/* <DonorCards /> */}
        <DonorCards handleRequestBlood={handleRequestBlood} />
      </div>


      <div>
        <h2>Blood Recipient Names</h2>
        <RecipientCards />
      </div>

      <div className="row mt-4">
        {universalDonorsData.map((donor, index) => (
          <div className="col" key={index}>
            <div className="card-body">
              <h4 className="card-title">{donor.heading}</h4>
              <p className="card-text">{donor.content}</p>
              <a href={donor.buttonLink} className="btn btn-danger">
                {donor.buttonLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;