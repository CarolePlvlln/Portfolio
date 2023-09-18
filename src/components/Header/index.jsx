import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import head from "./header.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="Header" style={head}>
      <img src={logo} alt="logo" className="logo" />
      <div className="menu">
        <div
          className="iconMenu toogle"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {!navbarOpen ? (
            <FontAwesomeIcon
              className="iconsMenu bar"
              icon={faBars}
              style={{ width: "30px", height: "30px" }}
            />
          ) : (
            <FontAwesomeIcon
              className="iconsMenu cross"
              icon={faXmark}
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          )}
        </div>
        {navbarOpen ? (
          <div className="navBar">
            <ul>
              <li>
                <a
                  to="/"
                  className="navLink navLink-fade-up"
                  href="#presentation"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  to="Home/Services"
                  className="navLink navLink-fade-up"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a className="navLink navLink-fade-up" href="#travaux">
                  Travaux
                </a>
              </li>
              <li>
                <a className="navLink navLink-fade-up" href="#aPropos">
                  A Propos
                </a>
              </li>
              <li>
                <a className="navLink navLink-fade-up" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
