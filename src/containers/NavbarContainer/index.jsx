import { useLocation } from "react-router-dom";
import { NavbarTransf } from "../../components/NavbarTransf/navbar";
import { Navbar } from "../../components/Navbar/navbar";

export default function NavbarContainer() {
    const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <NavbarTransf />}
      {location.pathname === "/inicio" && <Navbar />}
    </>
  );
}
