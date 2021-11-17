import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="logos">
       <Link> <LinkFooter icono={faEnvelope} texto="Contactanos" /> </Link>
       <Link ><LinkFooter icono={faShare} texto="Compartir" /> </Link> 
      </div>
    </footer>
  );
};

export default Footer;
