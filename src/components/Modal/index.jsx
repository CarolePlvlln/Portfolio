/* eslint react/forbid-prop-types: 0 */
import React from "react";
import modal from "./modal.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ open, children, onClose }) => {
  // Si modal n'est pas ouvert alors : null (pour la cacher)
  if (!open) return null;

  return (
    <div className="overlay" style={modal}>
      <div className="modal">
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="img-text">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
