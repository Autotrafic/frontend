import "./styles/App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransferencePage from "./pages/TransferencePage";
import { UploadDocsLaterPage } from "./pages/messages/UploadDocsLaterPage";
import NotFoundPage from "./pages/404";
import FloatingWhatsappIcon from "./components/FloatingWhatsappIcon";
import NavbarContainer from "./containers/NavbarContainer";
import FooterContainer from "./containers/FooterContainer";

function App() {
  return (
    <>
      <NavbarContainer />

      <Router />

      <FooterContainer />
      <FloatingWhatsappIcon />
    </>
  );
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<TransferencePage />} />
      <Route path="/subir-docs-luego/:orderId" element={<UploadDocsLaterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
