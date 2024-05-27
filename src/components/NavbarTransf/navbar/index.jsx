import "./navbar.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { MobileNavLinks } from "./mobileNavLinks";
import { DEVICE_SIZES } from "../../../utils/styles";
import styled from "styled-components";
import { TRANSFERENCE_ID } from "../../../utils/constants";

export function NavbarTransf() {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_SIZES.mobile });

  const LinkDiv = styled.div`
    position: absolute;
    width: 200px;
    height: 100%;
  `;
  return (
    <div className="navbarContainer">
      <Link to={TRANSFERENCE_ID} smooth>
        <div className="sideSection">
          <Logo />
          <LinkDiv />
        </div>
      </Link>
      <div className="middleSection">{!isMobile && <NavLinks />}</div>
      <div className="sideSection">{isMobile ? <MobileNavLinks /> : <Accessibility />}</div>
    </div>
  );
}
