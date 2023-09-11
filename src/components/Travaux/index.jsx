/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import travaux from "./travaux.scss";
import PropTypes from "prop-types";
import Modal from "../Modal";
//import { useNavigate } from "react-router-dom";
import travauxList from "../../Data/travauxList.json";

//import arrow_up from "../../assets/images/arrow_up.png";

function Travaux({ title, cover, categorie, pictures, description, outils }) {
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
        <p>{description}</p>
        <h3>Outils utilisés</h3>
        <div className="tools">
          <ul className="tools-list">
            {outils.map((outil, index) => {
              return <li key={index}>{outil}</li>;
            })}
          </ul>
        </div>
        <div className="pictures">
          {pictures.map((picture, index) => {
            return (
              <img
                src={picture}
                key={"picture" + index}
                alt="work pictures"
                className="work-images"
              />
            );
          })}
        </div>
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
  outils: PropTypes.array,
};

export default Travaux;
