import React from "react";
import { Link } from "react-router-dom";
import error from "./error.scss";

function Error() {
  return (
    <div className="error404-layout" style={error}>
      <div className="content">
        <h1>404</h1>
        <h2>{`Oups! La page que vous demandez n'existe pas.`}</h2>
        <Link to="/" className="link">{`Retourner sur la page d'accueil`}</Link>
      </div>
    </div>
  );
}

export default Error;
