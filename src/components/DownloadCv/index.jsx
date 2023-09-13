import React from "react";
import downloadCV from "./downloadCv.scss";

const cvFile = "http://localhost:3000/works/branding/ohMyTea/banner.jpg";

function BtnCV() {
  const downloadCv = (url) => {
    //nom document
    const fileName = url.split("/").pop();
    //créer balise "a"
    const aTag = document.createElement("a");
    aTag.herf = url;
    //attribut de la balise "a"
    aTag.setAttribute("download", fileName);
    //ratacher la balise "a" au DOM
    document.body.appendChild(aTag);
    aTag.click();
    //retire l'élément du DOM
    aTag.remove();
  };

  return (
    <div className="btnCV" style={downloadCV}>
      <button
        className="downloadCV"
        onClick={() => {
          downloadCv(cvFile);
        }}
      >
        Télécharger mon CV
      </button>
    </div>
  );
}

export default BtnCV;
