import React, { useState, useEffect } from "react";

export function useScroll() {
  // Pour gérer la direction du scroll
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // Décalage du document.body
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  // Direction verticale
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  // Direction horizontale
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  // Défilement vers le haut ou vers le bas
  const [scrollDirection, setScrollDirection] = useState();

  const listener = (e) => {
    /* getBoundingClientRect() retourne un objet DOMRect fournissant des informations sur la taille d'un élément et sa position relative par rapport à la zone d'affichage.*/
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    //class "down" ou "up"
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
