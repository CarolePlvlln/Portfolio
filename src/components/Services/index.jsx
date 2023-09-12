import React from "react";
import "./services.scss";
import PropTypes from "prop-types";

function Services(props) {
  return (
    <section className="service-container">
      <div className="services-box">
        {/*On utilise les props pour afficher celui du label dans le fichier index.jsx logement(ou apropos).jsx*/}
        <h2>{props.label}</h2>
        <div>{props.children}</div>
      </div>
    </section>
  );
}

Services.propTypes = {
  label: PropTypes.string,
  children: PropTypes.array,
};
export default Services;
