import React from "react";
import "./services.css";
//import arrow_up from "../../assets/images/arrow_up.png";

function Services (props) {
    
    return (
      <section className="service-container">
        <div className="services-box">
        {/*On utilise les props pour afficher celui du label dans le fichier index.jsx logement(ou apropos).jsx*/}
        <h2>{props.label}</h2>
        <p>{props.children}</p>
      </div>
      </section>
    );
  };
  
  export default Services;
  //<img alt="icon-arrow-up" src={arrow_up} className={`arrow-up ${classOpen}`}></img>