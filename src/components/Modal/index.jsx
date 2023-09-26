import React from "react";
import modal from "./modal.scss";
import PropTypes from "prop-types";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ open, children, onClose }) => {
  // Si la modale n'est pas ouverte alors : null (pour la cacher)
  if (!open) return null;

  return (
    <div className="overlay" style={modal}>
      <div className="modal">
        <FontAwesomeIcon icon={faXmark} onClick={onClose} className="button" />
        <div
          className="img-text"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
};
export default Modal;
