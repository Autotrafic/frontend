import { Link } from "react-scroll";
import { TRANS_NAVBAR_ROUTES } from "../../../utils/constants";
import "./navbar.css";
import React from "react";

export function NavLinks() {
  return (
    <div className="desktopNavLinksContainer">
      <ul className="desktopLinksWrapper">
        {TRANS_NAVBAR_ROUTES.map((route) => (
          <Link to={route.scrollTo} smooth offset={-100} >
            <li className="desktopLinkItem">{route.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
