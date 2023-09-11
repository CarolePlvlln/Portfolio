import React, { useState } from "react";
//import Travaux from "../Travaux";
import filter from "./filter.scss";
import travauxList from "../../Data/travauxList.json";

function Filter() {
  const [works, setworks] = useState("Développelement web");

  const handleBtns = (e) => {
    const workCategorie = e.target.value;
    const workList = travauxList;
    //vérifier si catégorie du bouton est égale à "développement web"
    if (workCategorie === "Développelement web") setworks(works);
    else {
      //Filtre {catégorie} appliqué sur travauxList.json pour sélectionner catégorie travaux égale à catégorie bouton
      const filteredWorks = workList.filter(({ categorie }) => {
        return categorie.includes(workCategorie);
      });
      //travaux filtrés
      setworks(filteredWorks);
    }
  };

  return (
    <div className="filter" style={filter}>
      <button
        onClick={handleBtns}
        type="button"
        value="Développelement web"
        id="devWeb"
      >
        Développement Web
      </button>
      <button onClick={handleBtns} type="button" value="branding" id="branding">
        Branding
      </button>
      <button
        onClick={handleBtns}
        type="button"
        value="graphisme"
        id="graphisme"
      >
        Graphisme & Illustration
      </button>
    </div>
  );
}

export default Filter;
