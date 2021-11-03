import React from "react";
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {motion} from "framer-motion"

const Tarjeta = ({ haiku, imagen, fotoDePerfil, tituloHaiku }) => {
  const [invisible, setInvisible] = useState(true);
  const cambiarVisibilidad = () => {
    if (invisible == false) {
      setInvisible(true);
    } else if (invisible == true) {
      setInvisible(false);
    }
  };
  return (
    <div className="Tarjeta">
      <div className="imagenTarjeta" onClick={cambiarVisibilidad}>
        <p
          className="haiku"
          style={{
            display: invisible ? "none" : "block",
          }}
        >
          {haiku}
        </p>
        <img className="imagenPrincipal" src={imagen} alt="/" />
      </div>
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
