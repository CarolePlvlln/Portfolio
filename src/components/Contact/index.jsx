import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "./contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // Evite que la page soit rechagé quand c'est renvoyé.
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jpnt457",
        "template_h8spz3r",
        form.current,
        "G_tlkfWEajv4-PASN"
      )
      .then(
        () => {
          // Message bien envoyé
          "Votre message a été envoyé";
        },
        () => {
          // Erreur
          "Votre message n'a pas pu être envoyé";
        }
      );
  };

  return (
    <div className="form" style={contact}>
      <h1>Contact</h1>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <div className="nom-prenom">
          <div className="form-group">
            <label>Nom</label>
            <input
              className="from_firstname"
              type="text"
              id="from_firstname"
              name="from_firstname"
              placeholder="Nom"
            />
          </div>
          <div className="form-group form-name">
            <label>Prénom</label>
            <input
              className="from_lastname"
              type="text"
              id="prenom"
              name="from_lastname"
              placeholder="Prénom"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Adresse e-mail</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Sujet</label>
          <input
            className="form-control"
            type="text"
            id="subject"
            name="subject"
            placeholder="Sujet"
          />
        </div>
        <div className="form-group">
          <label>Votre message</label>
          <div className="messageBox">
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
        </div>

        <button
          id="submit-message-form"
          name="sendmail"
          value="sendmail"
          className="btn-submit"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};
export default Contact;
