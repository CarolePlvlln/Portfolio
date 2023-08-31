import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../assets/images/logo.png";
import head from "./header.css";
import PropTypes from 'prop-types';


function Header() {
  return (
    <div className="Header" style={head}>
      <img src={logo} alt="logo" className="logo" />
      <div className="navBar">
      <ul>
        <li>
          <NavLink to="/" className="navLink navLink-fade-up" href="#" data-parent="presentation">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="Home/Services" className="navLink navLink-fade-up" href="#" data-parent="services-section">Services</NavLink>
        </li>
        <li>
          <NavLink to="Home/Travaux" className="navLink navLink-fade-up" href="#" data-parent="travaux">Travaux</NavLink>
        </li>
        <li>
          <NavLink to="Home/Apropos" className="navLink navLink-fade-up" href="#" data-parent="aPropos">A Propos</NavLink>
        </li>
        <li>
          <NavLink to="Home/Contact" className="navLink navLink-fade-up" href="#" data-parent="contact">Contact</NavLink>
        </li>
      </ul>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;