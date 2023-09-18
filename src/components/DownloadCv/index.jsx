import React from "react";
import downloadCV from "./downloadCv.scss";

function BtnCV() {
  return (
    <div className="btnCV" style={downloadCV}>
      <a
        href="http://localhost:3000/works/branding/ohMyTea/banner.jpg"
        className="downloadCV"
      >
        Télécharger mon CV
      </a>
    </div>
  );
}

export default BtnCV;
