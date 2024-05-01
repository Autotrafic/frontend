import { NAVBAR_ROUTES } from "../../../utils/constants";
import "./navbar.css";
import React from "react";

export function NavLinks() {
  return (
    <div className="desktopNavLinksContainer">
      <ul className="desktopLinksWrapper">
        {NAVBAR_ROUTES.map((route) => (
          <li className="desktopLinkItem">
            <a className="desktopLink" href={route?.route}>
              {route.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
