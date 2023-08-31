import React from "react";
import travaux from "./travaux.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
//import travauxList from "../../Data/travauxList.json";

//import arrow_up from "../../assets/images/arrow_up.png";

function Travaux({ id, title, cover }) {
    const navigate = useNavigate();
   
    return (
      <div className="works" style={travaux}>
        <h3>{title}</h3>
        <img className="img-portfolio"
          src={cover}
          alt=""
          onClick={(e) => {
            navigate(`/Works/${id}`);
          }}
        />
      </div>
    );
  }
  
  Travaux.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    categorie: PropTypes.string,
    cover: PropTypes.string,
  };
export default Travaux;