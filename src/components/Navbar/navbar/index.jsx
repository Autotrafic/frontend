import "./navbar.css";
import { useMediaQuery } from "react-responsive";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { MobileNavLinks } from "./mobileNavLinks";
import { DEVICE_SIZES } from "../../../utils/styles";

export function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DEVICE_SIZES.mobile });

  return (
    <div className="navbarContainer">
      <div className="sideSection">
        <Logo />
      </div>
      <div className="middleSection">{!isMobile && <NavLinks />}</div>
      <div className="sideSection">{isMobile ? <MobileNavLinks /> : <Accessibility />}</div>
    </div>
  );
}
