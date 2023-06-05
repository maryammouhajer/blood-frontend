import React from "react";
import blooddonor from "../../../image/blooddonor.jpg";
const Home = () => {
  const carouselImagesData = [
    {
      src: blooddonor,
      alt: "image/_107317099_blooddonor976.jpg",
    },
    {
      src: "../image/Blood-facts_10-illustration-graphics__canteen.png",
      alt: "image/Blood-facts_10-illustration-graphics__canteen.png",
    },
  ];
  const cardData = [
    {
      header: "The need for blood",
      content:
        "There are many reasons patients need blood. A common misunderstanding about blood usage is that accident victims are the patients who use the most blood. Actually, people needing the most blood include those: 1) Being treated for cancer 2) Undergoing orthopedic surgeries 3) Undergoing cardiovascular surgeries 4) Being treated for inherited blood disorders",
    },
    {
      header: "Blood Tips",
      content:
        "1) You must be in good health. 2) Hydrate and eat a healthy meal before your donation. 3) You’re never too old to donate blood. 4) Rest and relaxed. 5) Don’t forget your FREE post-donation snack.",
    },
    {
      header: "Who you could Help",
      content:
        "Every 2 seconds, someone in the World needs blood. Donating blood can help: 1) People who go through disasters or emergency situations. 2) People who lose blood during major surgeries. 3) People who have lost blood because of a gastrointestinal bleed. 4) Women who have serious complications during pregnancy or childbirth. 5) People with cancer or severe anemia sometimes caused by thalassemia or sickle cell disease.",
    },
  ];
  const bloodGroupData = [
    {
      heading: "BLOOD GROUPS",
      content:
        "Blood group of any human being will mainly fall in any one of the following groups. A positive or A negative B positive or B negative O positive or O negative AB positive or AB negative. Your blood group is determined by the genes you inherit from your parents. A healthy diet helps ensure a successful blood donation, and also makes you feel better!",
      imageSrc: "../../../image/blood_donationcover.jpeg",
      altText: "Blood Donation Cover",
    },
  ];
  const universalDonorsData = [
    {
      heading: "UNIVERSAL DONORS AND RECIPIENTS",
      content:
        "The most common blood type is O, followed by type A. Type O individuals are often called 'universal donors' since their blood can be transfused into persons with any blood type. Those with type AB blood are called 'universal recipients' because they can receive blood of any type. For emergency transfusions, blood group type O negative blood is the variety of blood that has the lowest risk of causing serious reactions for most people who receive it. Because of this, it's sometimes called the universal blood donor type.",
      buttonLabel: "Become a Donor",
      buttonLink: "DonateBlood",
    },
  ];
  return (
    <div className="container">
      <div
        id="page-container"
        style={{ marginTop: "50px", position: "relative", minHeight: "84vh " }}
      >
        <div className="container">
          <div id="content-wrap" style={{ paddingBottom: "75px" }}>
            {/* carouselImagesData section */}
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
                      width="100%"
                      height="500"
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
            
            <h1 style={{ textAlign: "center", fontSize: "45px" }}>
              Welcome to BloodBank & Donor Management System
            </h1>
           
            {/* card_Data section */}
            <div className="row">
              {cardData.map((card, index) => (
                <div className="col-lg-4 mb-4" key={index}>
                  <div className="card">
                    <h4 className="card-header card bg-info text-white">
                      {card.header}
                    </h4>
                    <p
                      className="card-body overflow-auto"
                      style={{
                        paddingLeft: "2%",
                        height: "120px",
                        textAlign: "left",
                      }}
                    >
                      {card.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h2>Blood Donor Names</h2>

            {/* <bloodDonorCard /> */}
            {/* blood_Group_Data section */}
            <div className="row">
              {bloodGroupData.map((data, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="col-lg-6">
                    <h2>{data.heading}</h2>
                    <p>{data.content}</p>
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="img-fluid rounded"
                      src={data.imageSrc}
                      alt={data.altText}
                    />
                  </div>
                </div>
              ))}
            </div>

            <hr />
            {/* universal_Donors_Data section*/}
            <div className="row mb-4">
              {universalDonorsData.map((data, index) => (
                <div className="col-md-8" key={index}>
                  <h4>{data.heading}</h4>
                  <p>{data.content}</p>
                </div>
              ))}
              <div className="col-md-4">
                <a
                  className="btn btn-lg btn-secondary btn-block"
                  href={universalDonorsData[0].buttonLink}
                  style={{
                    textAlign: "center",
                    backgroundColor: "#7FB3D5",
                    color: "#273746",
                  }}
                >
                  {universalDonorsData[0].buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
