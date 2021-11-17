import React from "react";

const Compartir = ({ children }) => {
  const copiarAlClip = () => {
    try {
      navigator.clipboard.writeText("http://localhost:3000/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={copiarAlClip}
      style={{
        width: "auto",
        height: "auto",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};

export default Compartir;
