import "./navbar.css";
import { useMediaQuery } from "react-responsive";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { MobileNavLinks } from "./mobileNavLinks";
import { DEVICE_SIZES } from "../../../utils/styles";
import styled from "styled-components";

export function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_SIZES.mobile });

  const LinkDiv = styled.div`
    position: absolute;
    width: 200px;
    height: 100%;
  `;
  return (
    <div className="navbarContainer">
      <a href="https://autotrafic.es/" style={{ textDecoration: "none" }}>
        <div className="sideSection">
          <Logo isMobile={isMobile}/>
          <LinkDiv />
        </div>
      </a>
      <div className="middleSection">{!isMobile && <NavLinks />}</div>
      <div className="sideSection">
        {isMobile ? <MobileNavLinks /> : <Accessibility />}
      </div>
    </div>
  );
}
