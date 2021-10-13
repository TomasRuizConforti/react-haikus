import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div id="cajaBuscador">
        <input type="text" name="buscar" id="buscar" placeholder="Buscar" />
        <img
          id="lupa"
          src="./iconoBuscar.svg"
          alt="/"
          width="32px"
          height="32px"
        />
      </div>
    </header>
  );
};

export default Header;
