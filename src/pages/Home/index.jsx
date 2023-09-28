import React, { useState } from "react";
import home from "./home.scss";
import Services from "../../components/Services";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import CV_Carole_Pelvillain from "../../assets/images/CV_Carole_Pelvillain.webp";
import Travaux from "../../components/Travaux";
import travauxList from "../../Data/travauxList.json";
import Contact from "../../components/Contact";

function Home() {
  const [works, setworks] = useState(travauxList);

  const handleBtns = (e) => {
    const workCategorie = e.target.value;
    console.log(workCategorie);
    const workList = travauxList;
    //vérifier si catégorie du bouton est égale à "All"
    if (workCategorie === "All") setworks(travauxList);
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
    <main className="home-container" style={home}>
      <section className="presentation-container" id="presentation">
        <div className="img-gradient"></div>
        <div className="presentation">
          <h1>Carole Pelvillain</h1>
          <h2>
            {`J'ai travaillé plusieurs années dans l'univers de la mode, notamment en tant que
            professeure de modélisme et de DAO dans des écoles. Le monde digital m'a toujours
            attiré. Curieuse et passionnée, j'ai décidé de me former au développement Web pour
            allier mes connaissances et mes compétences en arts visuels et digital web.`}
          </h2>
          <div className="socialLinks">
            <a href="https://github.com/CarolePlvlln">
              <img src={github} alt="github-icon" />
            </a>
            <a href="https://www.linkedin.com/in/carole-pelvillain/">
              <img src={linkedin} alt="linkedin-icon" />
            </a>
          </div>
        </div>
      </section>
      <section className="services-section" id="services">
        <div className="img-gradient-services"></div>
        <h1>Mes services</h1>
        <div className="services-button">
          <div className="services">
            <div className="services-collapse">
              <Services label="Développement web">
                <h3>{`Réalisation d'applications web-front`}</h3>
                <div className="descriptif-service">
                  Optimisation de l'ergonomie et de la navigation de votre
                  application web.
                </div>
                <h3>Languages</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>Javascript</li>
                  <li>React JS</li>
                </ul>
              </Services>
            </div>
            <div className="services-collapse">
              <div className="content">
                <Services label="Branding">
                  <h3>Création de logo et charte graphique</h3>
                  <div className="descriptif-service">
                    Accompagnement et confection d'une identité visuelle à
                    l'image de votre entreprise
                  </div>
                  <h3>Outils</h3>
                  <ul>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Procreate</li>
                    <li>InDesign</li>
                  </ul>
                </Services>
              </div>
            </div>
            <div className="services-collapse">
              <div className="content">
                <Services label="Graphisme" className="services-content">
                  <h3>Illustrations, écriture de scénarios</h3>
                  <div className="descriptif-service">
                    Réalisation de brochures, affiches, illustrations...
                    destinées à un support web ou print.
                  </div>
                  <h3>Outils</h3>
                  <ul>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Procreate</li>
                    <li>InDesign</li>
                  </ul>
                </Services>
              </div>
            </div>
          </div>
          <a href={CV_Carole_Pelvillain} className="downloadCV">
            Télécharger mon CV
          </a>
        </div>

        <div className="img-gradient-services-bottom"></div>
      </section>

      <section className="travaux" id="travaux">
        <h1>Mes travaux</h1>
        <div className="filter">
          <button onClick={handleBtns} type="button" value="All" id="All">
            Tous
          </button>
          <button
            onClick={handleBtns}
            type="button"
            value="Développement Web"
            id="devWeb"
          >
            Développement Web
          </button>
          <button
            onClick={handleBtns}
            type="button"
            value="Branding"
            id="branding"
          >
            Branding
          </button>
          <button
            onClick={handleBtns}
            type="button"
            value="Graphisme"
            id="graphisme"
          >
            Graphisme & Illustration
          </button>
        </div>
        <div className="allWorks">
          {works.map(
            ({
              id,
              title,
              cover,
              categorie,
              description,
              pictures,
              outils,
              problematique,
            }) => (
              <Travaux
                id={id}
                key={id}
                title={title}
                cover={cover}
                categorie={categorie}
                description={description}
                pictures={pictures}
                outils={outils}
                problematique={problematique}
              />
            )
          )}
        </div>
      </section>
      <section className="aPropos" id="aPropos">
        <div className="img-gradient-a-propos"></div>
        <h1>A propos</h1>
        <div className="list-about">
          <p>
            <strong>Ville :</strong> Nantes
            <br />
            <strong>Sports :</strong> Escalade, Course à pied, PPG
            <br />
            <strong>Autre loisirs :</strong> Dessin, Couture
            <br />
            <strong>Langues :</strong> Français, Anglais
          </p>
        </div>
      </section>
      <section className="contact" id="contact">
        <Contact></Contact>
      </section>
    </main>
  );
}

export default Home;
