import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const logos = [
  {
    logo: "faFacebook",
  },
  {
    logo: "faEnvelope",
  },
  {
    logo: "faInstagram",
  },
];

const ListaLogos = logos.map(({logo}) = () => (
  <li className="listalogo">
      <FontAwesomeIcon icon={{logo}} className="logo"/>
  </li>
));

export default ListaLogos;
