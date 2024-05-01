import "./navbar.css";
import React, { useState } from "react";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { NAVBAR_ROUTES } from "../../../utils/constants";

export function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='navLinksContainer'>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <ul className='linksWrapper'>
          {NAVBAR_ROUTES.map((route) => (
            <li className='linkItem'>
              <a className='link' href={route?.route}>
                {route.title}
              </a>
            </li>
          ))}
          <div className='marginer' />
          <Accessibility setOpen={setOpen} />
        </ul>
      )}
    </div>
  );
}
