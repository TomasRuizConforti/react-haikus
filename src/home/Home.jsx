import React from "react";
import "./Home.css";
import Tarjeta from "./Tarjeta";

const Home = () => {
  return (
    <div>
      <h4 className="H4">Colección</h4>
      <div className="contenedorTarjetas">
        <Tarjeta
          imagen="https://picsum.photos/200/300"
          fotoDePerfil="https://randomuser.me/api/portraits/men/32.jpg"
          tituloHaiku="Haiku"
        />
        <Tarjeta
          imagen="https://picsum.photos/200/300"
          fotoDePerfil="https://randomuser.me/api/portraits/men/32.jpg"
          tituloHaiku="Haiku"
        />
      </div>
    </div>
  );
};

export default Home;
