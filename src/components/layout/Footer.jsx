import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Compartir from "./Compartir";

const Footer = () => {
  return (
    <footer>
      <div className="logos">
        <Link to="/contactanos" className="hipervinculo">
          <LinkFooter icono={faEnvelope} texto="Contactanos" />
        </Link>
        <Compartir>
          <LinkFooter icono={faShare} texto="Compartir" />
        </Compartir>
      </div>
    </footer>
  );
};

export default Footer;
