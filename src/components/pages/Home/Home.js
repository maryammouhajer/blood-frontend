import React from "react";
import bloodDonationCover from "../../../image/blood_donationcover.jpeg";
import bloodFactsImage from "../../../image/Blood-facts_10-illustration-graphics__canteen.png";
import save from "../../../image/save.png"
import blood_drop_logo from "../../../image/blood_drop_logo.jpg"
import "./Home.css";
import DonorCards from "../../DonorCards";


const Home = () => {
  const carouselImagesData = [
    { src: save, alt: "logo" },
    { src: bloodFactsImage, alt: "Blood Facts Image" }
  ];

  const cardData = [
    {
      header: "The Need for Blood",
      content: "There are many reasons patients need blood. A common misunderstanding about blood usage is that accident victims are the patients who use the most blood. Actually, people needing the most blood include those who are being treated for cancer, undergoing orthopedic surgeries, undergoing cardiovascular surgeries, or being treated for inherited blood disorders."
    },
    {
      header: "Blood Donation Tips",
      content: "To donate blood, you must be in good health, hydrated, and have eaten a healthy meal beforehand. You're never too old to donate blood, so long as you feel rested and relaxed. Don't forget to enjoy your free post-donation snack!"
    },
    {
      header: "Who You Could Help",
      content: "Every 2 seconds, someone in the world needs blood. Donating blood can help those who go through disasters or emergency situations, lose blood during major surgeries, have lost blood because of gastrointestinal bleeding, have serious complications during pregnancy or childbirth, or have cancer or severe anemia caused by thalassemia or sickle cell disease."
    }
  ];

  const bloodGroupData = [
    {
      heading: "Blood Groups",
      content: "A person's blood group is determined by the genes inherited from their parents. Blood groups can be A positive or A negative, B positive or B negative, O positive or O negative, or AB positive or AB negative. A healthy diet helps ensure a successful blood donation and makes you feel better.",
      imageSrc: bloodDonationCover,
      altText: "Blood Donation Cover"
    }
  ];

  const bloodDrop = [
    {
      heading: "Blood Donor names",
      imageSrc: blood_drop_logo,
      altText: "Blood_drop_logo"
    }
  ];

  const universalDonorsData = [
    {
      heading: "Universal Donors and Recipients",
      content: "The most common blood type is O, followed by type A. Type O individuals are often called 'universal donors' since their blood can be transfused into persons with any blood type. Those with type AB blood are called 'universal recipients' because they can receive blood of any type. For emergency transfusions, blood group type O negative blood is the variety of blood that has the lowest risk of causing serious reactions for most people who receive it. Because of this, it's sometimes called the universal blood donor type.",
      buttonLabel: "Become a Donor",
      buttonLink: "DonateBlood"
    }
  ];

  return (
    <div className="container">
      <div className="container-fluid position-relative ">
        <div className="row no-lines position-absolute" style={{ top: "0", paddingBottom: "0px" }}>
          <div className="col"></div>
        </div>

        <div className="row mt-4 align-items-center">
          <div className="col">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                {carouselImagesData.map((image, index) => (
                  <li key={index} data-target="#demo" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                ))}
              </ul>
              <div className="carousel-inner">
                {carouselImagesData.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img src={image.src} alt={image.alt} className="d-block w-100" />
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {cardData.map((card, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <h4 className="card-header bg-info text-white">{card.header}</h4>
                <div className="card-body" style={{ maxHeight: "150px", overflowY: "scroll" }}>
                  <div style={{ paddingRight: "17px" }}>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {bloodDrop.map((group, index) => (
          <div className="" key={index}>
            <div className="card">
              <div className="d-flex flex-column justify-content-center text-center">
                <img src={group.imageSrc} alt={group.altText} className="card-img-top" style={{ maxWidth: "200px" }} />
                <div className="card-text">{group.content}</div>
                
              </div>
              <div className="card-text">

              </div>
            </div>
          </div>
        ))}
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
                <img src={group.imageSrc} alt={group.altText} className={`card-img-top ${index === 1 ? 'group-image' : ''}`} />

              </div>
            </div>

          </div>
        ))}
      </div>
      <div>
        <DonorCards/>
      </div>
      <div className="row mt-4">
        {universalDonorsData.map((donor, index) => (
          <div className="col" key={index}>

            <div className="card-body">
              <h4 className="card-title">{donor.heading}</h4>
              <p className="card-text">{donor.content}</p>
              <a href={donor.buttonLink} className="btn btn-danger">{donor.buttonLabel}</a>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Home;
