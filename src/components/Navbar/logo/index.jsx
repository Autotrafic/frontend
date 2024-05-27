import React from "react";
import logo from "./logo.svg";
import "./logo.css";

export function Logo({ isMobile }) {
  return (
    <div className="logoWrapper">
      <div className="logoImg">
        {isMobile ? (
          <img src={logo} alt="logo" width={150} height={52} />
        ) : (
          <img src={logo} alt="logo" width={200} height={70} />
        )}
      </div>
    </div>
  );
}
