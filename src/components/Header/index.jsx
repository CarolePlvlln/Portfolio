import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../assets/images/logo.png";
import head from "./header.scss";
//import PropTypes from 'prop-types';

function Header() {
  return (
    <div className="Header" style={head}>
      <img src={logo} alt="logo" className="logo" />
      <div className="navBar">
        <ul>
          <li>
            <NavLink
              to="/"
              className="navLink navLink-fade-up"
              href="#"
              data-parent="presentation"
            >
              Accueil
            </NavLink>
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
    </div>
  );
}

Header.propTypes = {};

export default Header;
