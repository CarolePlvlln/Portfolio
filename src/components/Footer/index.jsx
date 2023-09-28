import React from "react";
import logo from "../../assets/images/logo.png";
import footer from "./footer.css";

function Footer() {
  return (
    <div
      className="footer"
      style={footer}
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="footer__logo">
        <img src={logo} alt="logo-kasa" className="logo" />
      </div>
      <div className="contactInfo">
        <span itemProp="name">Carole Pelvillain,</span>
        <span itemProp="jobTitle"> Développeuse web à Nantes</span>
      </div>
    </div>
  );
}

export default Footer;
