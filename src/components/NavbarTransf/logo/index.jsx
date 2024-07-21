import React from "react";
import logo from "./logo.svg";
import "./logo.css";

export function Logo() {
  return (
    <div className="logoWrapper">
      <div className="logoImg">
        <img src={logo} alt="logo" width={160} height={40} />
      </div>
    </div>
  );
}
