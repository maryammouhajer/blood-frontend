import React from "react";
import bloodDonationCover from "../../../image/blood_donationcover.jpeg";
import bloodFactsImage from "../../../image/Blood-facts_10-illustration-graphics__canteen.png";
import save from "../../../image/save.png";
import "./Home.css";
import DonorCards from "../../Section/DonorCards";
import RecipientCards from "../../Section/RecipientCards";

import ContentCard from "../../Section/ContentCard";

const Home = () => {
  const carouselImagesData = [
    { src: save, alt: "logo" },
    { src: bloodFactsImage, alt: "Blood Facts Image" },
  ];

  const bloodGroupData = [
    {
      heading: "Blood Groups",
      content:
        "A person's blood group is determined by the genes inherited from their parents. Blood groups can be A positive or A negative, B positive or B negative, O positive or O negative, or AB positive or AB negative. A healthy diet helps ensure a successful blood donation and makes you feel better.",
      imageSrc: bloodDonationCover,
      altText: "Blood Donation Cover",
    },
  ];

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
        <DonorCards />
      </div>
      <div className="row mt-4">
        {bloodGroupData.map((group, index) => (
          <div className="" key={index}>
            <div className="row">
              <div className="card-body col-md-6 mb-4 pl-5">
                <h4 className="card-title">{group.heading}</h4>
                <p className="card-text">{group.content}</p>
              </div>
              <div className="card-body col-md-6 mb-4">
                <img
                  src={group.imageSrc}
                  alt={group.altText}
                  className={`card-img-top ${index === 1 ? "group-image" : ""}`}
                />
              </div>
            </div>
          </div>
        ))}
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
