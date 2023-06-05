import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerData = {
    copyright: `COPYRIGHT © ${currentYear}`,
    organization: "Blood Bank & Donation Management",
    rights: "ALL RIGHTS RESERVED.",
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        {footerData.copyright}
        <br />
        {footerData.organization}
        <br />
        {footerData.rights}
      </div>
    </div>
  );
}

export default Footer;


