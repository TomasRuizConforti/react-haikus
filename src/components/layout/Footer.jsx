import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="logos">
        <LinkFooter icono={faEnvelope} texto="Contactanos" />
        <LinkFooter icono={faShare} texto="Compartir" />
      </div>
    </footer>
  );
};

export default Footer;
