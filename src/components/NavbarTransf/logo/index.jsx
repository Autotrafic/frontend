import React from "react";
import logo from "./logo.svg"
import "./logo.css"

export function Logo() {
  return (
    <div className="logoWrapper">
      <div className="logoImg">
        <img src={logo} alt="logo" width={180} height={45} />
      </div>
    </div>
  );
}
