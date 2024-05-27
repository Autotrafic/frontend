import "./navbar.css";
import React, { useState } from "react";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { TRANS_NAVBAR_ROUTES } from "../../../utils/constants";
import { Link } from "react-scroll";

export function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navLinksContainer">
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <ul className="linksWrapper">
          {TRANS_NAVBAR_ROUTES.map((route) => (
            <Link to={route.scrollTo} smooth offset={-90} onClick={() => setOpen(false)}>
              <li className="linkItem">{route.title}</li>
            </Link>
          ))}
          <div className="marginer" />
          <Accessibility setOpen={setOpen} />
        </ul>
      )}
    </div>
  );
}
