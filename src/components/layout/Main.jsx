import React from "react";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <main>
      <h1 className="H1">Haikus</h1>
      {children}
    </main>
  );
};

export default Main;
