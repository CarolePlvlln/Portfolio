import React, { useState } from "react";
import ImageZoom from "react-image-zooom";
import travaux from "./travaux.scss";
import PropTypes from "prop-types";
import Modal from "../Modal";

function Travaux({
  title,
  cover,
  categorie,
  pictures,
  description,
  outils,
  problematique,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="works-modal">
      <div
        className="works"
        itemScope
        itemType="https://schema.org/ImageObject"
        onClick={() => setIsOpen(true)}
        style={travaux}
      >
        <img className="img-portfolio" src={cover} alt="Work cover" />
        <div className="title">{title}</div>
      </div>
      <Modal
        className="modal"
        itemScope
        itemType="https://schema.org/ImageObject"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="workInfo">
          <h2>{title}</h2>
          <h3>{categorie}</h3>
          <p>{description}</p>
          <h3>Problématiques</h3>
          <p>{problematique}</p>
          <h3>Outils utilisés</h3>
          <div className="tools">
            <ul className="tools-list">
              {outils.map((outil, index) => {
                return <li key={index}>{outil}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="pictures">
          {pictures.map((picture, index) => {
            return (
              <ImageZoom
                src={picture}
                key={"picture" + index}
                alt="work pictures"
                className="work-images"
                itemProp="contentUrl"
                zoom="200"
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
