import React from "react";
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Tarjeta = ({ imagen, fotoDePerfil, tituloHaiku }) => {
  return (
    <div>
      <img className="imagenPrincipal" src={imagen} alt="/" />
      <div className="cuerpoHaiku">
        <div className="fotoYTitulo">
          <img
            src={fotoDePerfil}
            alt="Foto de perfil"
            className="fotoDePerfil"
          />
          <p className="tituloHaiku">{tituloHaiku}</p>
        </div>

        <FontAwesomeIcon icon={faShareAlt} className="icono" />
      </div>
    </div>
  );
};

export default Tarjeta;
