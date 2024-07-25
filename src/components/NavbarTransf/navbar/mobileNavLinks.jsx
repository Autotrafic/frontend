import "./navbar.css";
import React, { useState } from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function MobileNavLinks() {
  return (
    <a
      className="contact-link"
      href="tel:+34643219297"
      style={{ textDecoration: "none" }}
    >
      <div className="call-us-container">
        <FontAwesomeIcon
          icon={faPhone}
          size="sm"
          style={{ color: "#FCFCFC", marginRight: "4px" }}
        />
        <p className="call-us-text" spaced-digits>+34 643219297</p>
      </div>
    </a>
  );
}
