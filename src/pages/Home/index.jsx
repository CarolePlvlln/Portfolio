import React from "react";
import home from "./home.css";
import Services from "../../components/Services";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import Travaux from "../../components/Travaux";
import travauxList from "../../Data/travauxList.json";

function Home() {
  return (
<main className="home-container" style={home}>
    <section className="presentation-container">
    <div className="img-gradient"></div>
    <div className="presentation">
        <h1>Carole Pelvillain</h1>
            <h2>J'ai travaillé plusieurs années dans l'univers de la mode, notamment en tant que professeure de modélisme et de DAO dans des écoles. Le monde digital m'a toujours attiré. Curieuse et passionnée, j'ai décidé de me former au développement Web pour allier mes connaissances et mes compétences en arts visuel et digital web.
            </h2>
                <div className="socialLinks">
                    <img src={github} alt="github-icon"/>
                    <img src={linkedin}  alt="linkedin-icon"/>
                </div>
    </div>
    </section>
    <section className="services-section">
    <div className="img-gradient-services"></div>
        <h1>Mes services</h1>
        {/*<div className="img-gradiant-services"></div>*/}
        <div className="services-button">
            <div className="services">
                <div className="services-collapse">
                            <Services label="Developpement web">
                                <h3>Réalisation d'application web-front</h3>
                                <div className="descriptif-service">Bla bla bla</div>
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
                                <div className="descriptif-service">Bla bla bla</div>
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
                        <Services label="Graphisme-Illustration" className="services-content">
                            <h3>Illustrations, écriture de scénarios</h3>
                            <div className="descriptif-service">Bla bla bla</div>
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
            </div><button className="downloadCV">Télécharger mon CV</button>
        </div>
        
        <div className="img-gradient-services-bottom"></div>
    </section>
        
    <section className="travaux">
        <h1>Mes travaux</h1>
            <div className="filter">
                <button id ="WebDev" class="btn-filter btn-filter-clicked" autoFocus>Développement Web</button>
                <button id="Branding" class="btn-filter">Branding</button>
                <button id="Graphisme" class="btn-filter">Graphisme & Illustration</button>
            </div>
            <div className="allWorks" >
            {travauxList.map(({ id, title, cover, categorie }) => (
          <Travaux id={id} key={id} title={title} cover={cover} categorie={categorie}/>
          ))}</div>
    </section>
    <section className="aPropos">
    <div className="img-gradient-a-propos"></div>
        <h1>A propos</h1>
        <div className="list-about">
                <p><strong>Ville :</strong> Nantes<br />
                <strong>Sports :</strong> Escalade, Course à pied, PPG<br />
                <strong>Autre loisirs :</strong> Dessin, Couture<br />
                <strong>Langues :</strong> Français, Anglais</p>
        </div>
    </section>
    <section className="contact">
        <h1>Contact</h1>
        <div className="contactForm">
            <div class="nom-prenom">
                <div class="form-group form-name">
                    <label>Nom</label>
                    <input class="form-control" type="text" id="lastname" name="lastname" placeholder="Nom"/>
                </div>
                <div class="form-group form-name">
                    <label>Prénom</label>
                    <input class="form-control" type="text" id="firstname" name="firstname" placeholder="Prénom"/>
                </div>
            </div>
            <div class="form-group">
                <label>Adresse e-mail</label>
                <input class="form-control" type="text" id="email" name="email" placeholder="Email"/>
            </div>
            <div class="form-group">
                <label>Sujet</label>
                <input class="form-control" type="text" id="subject" name="subject" placeholder="Sujet"/>
            </div>
            <div class="form-group">
                <label>Votre message</label>
                <div className="messageBox">
                <textarea class="form-control" id="message" name="message" placeholder="Votre message"></textarea>
                </div> 
            </div>

            <button id="submit-message-form" name="sendmail" value="sendmail" class="btn-submit" type="submit">Envoyer</button>
         </div>
    </section>
</main>
    
  )
}

export default Home;