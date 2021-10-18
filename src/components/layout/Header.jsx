import React from "react";
import "./Header.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div id="cajaBuscador">
        <input type="text" name="buscar" id="buscar" placeholder="Buscar" />
        <FontAwesomeIcon icon={faSearch} id="lupa" width="32px" height="32px" />
      </div>
    </header>
  );
};

export default Header;
