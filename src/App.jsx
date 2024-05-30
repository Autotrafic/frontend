import "./styles/App.css";
import ReactDOM from "react-dom";
import FooterDesktop from "./components/FooterDesktop";
import FooterMobile from "./components/FooterMobile";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import { NavbarTransf } from "./components/NavbarTransf/navbar";
import TransferencePage from "./pages/TransferencePage";
import styled from "styled-components";
import whatsappIcon from "./assets/whatsapp-icon-skeleton.svg";
import { UploadDocsLaterPage } from "./pages/UploadDocsLaterPage";
import NotFoundPage from "./pages/404";

const tabletScreenMedia = "1000px";
const bigPhoneScreenMedia = "476px";

const WhatsappIconContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 35px;
  background-color: white;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: 0.2s;

  &:hover {
    width: 100px;
    height: 100px;
    transition: 0.2s;
  }

  @media (max-width: ${tabletScreenMedia}) {
    width: 70px;
    height: 70px;
  }
`;

function App() {
  const location = useLocation();
  const screenWidth = window.innerWidth;

  let isMobile = false;

  if (screenWidth < 415) {
    isMobile = true;
  }

  return (
    <>
      {location.pathname === "/" && <NavbarTransf />}
      {location.pathname === "/inicio" && <Navbar />}

      <Routes>
        <Route path="/" element={<TransferencePage />} />
        <Route path="/subir-docs-luego/:orderId" element={<UploadDocsLaterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {isMobile ? <FooterMobile /> : <FooterDesktop />}
      <a href="https://wa.me/643219297" target="_blank" style={{ textDecoration: "none" }}>
        <WhatsappIconContainer>
          {isMobile ? (
            <img src={whatsappIcon} alt="" width={60} />
          ) : (
            <img src={whatsappIcon} alt="" width={80} />
          )}
        </WhatsappIconContainer>
      </a>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
