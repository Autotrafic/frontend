import "./styles/App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import { NavbarTransf } from "./components/NavbarTransf/navbar";
import TransferencePage from "./pages/TransferencePage";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <NavbarTransf />}
      {location.pathname === "/inicio" && <Navbar />}

      <Routes>
        <Route path="/" element={<TransferencePage />} />
      </Routes>

      <Footer />
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
