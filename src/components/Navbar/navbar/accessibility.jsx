import "./navbar.css";
import React from "react";

export function Accessibility({ setOpen }) {
  const handleClick = () => {
    setOpen && setOpen(false);
  };

  return (
    <div className="accessibilityContainer">
      {/*  <button className="accessButton" onClick={handleClick}>
        Área Cliente
      </button> */}
    </div>
  );
}
