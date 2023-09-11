import React from "react";
import modal from "./modal.scss";
import PropTypes from "prop-types";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ open, children, onClose }) => {
  // Si modal n'est pas ouvert alors : null (pour la cacher)
  if (!open) return null;

  return (
    <div className="overlay" style={modal}>
      <div className="modal">
        <FontAwesomeIcon icon={faXmark} onClick={onClose} className="button" />

        <div className="img-text">{children}</div>
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
