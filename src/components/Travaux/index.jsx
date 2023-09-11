/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import travaux from "./travaux.scss";
import PropTypes from "prop-types";
import Modal from "../Modal";
//import { useNavigate } from "react-router-dom";
import travauxList from "../../Data/travauxList.json";

//import arrow_up from "../../assets/images/arrow_up.png";

function Travaux({ title, cover, categorie, pictures, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="works-modal">
      <div className="works" onClick={() => setIsOpen(true)} style={travaux}>
        <img className="img-portfolio" src={cover} alt="Work cover" />
        <div className="title">{title}</div>
      </div>
      <Modal className="modal" open={isOpen} onClose={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <h3>{categorie}</h3>
        {/*{pictures.map((picture) => {
          return (
            <img
              src={picture}
              key={picture}
              alt="work pictures"
              className="work-images"
            >
              {picture}
            </img>
          );
        })}*/}
        <p>{description}</p>
        Hello
      </Modal>
    </div>
  );
}

Travaux.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  categorie: PropTypes.string,
  cover: PropTypes.string,
  description: PropTypes.string,
  pictures: PropTypes.array,
};

export default Travaux;
