import "./Contactanos.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const logos = [
  {
    logo: faFacebook,
  },
  {
    logo: faEnvelope,
  },
  {
    logo: faInstagram,
  },
];

const ListaLogos = logos.map(({ logo }) => (
  <li className="li-logo">
    <FontAwesomeIcon icon={logo} className="logo" />
  </li>
));

const Contactanos = () => {
  return (
    <div>
      <ul className="listaLogos">
          {ListaLogos}
      </ul>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
        doloremque laudantium atque, necessitatibus voluptate natus
        reprehenderit aperiam error eligendi sequi quae aut ut veniam eveniet
        quam earum vero quo?
      </p>
    </div>
  );
};

export default Contactanos;
