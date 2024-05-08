import "./styles/App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar/navbar";
import { UserProvider } from "./context/user";
import TransferencePage from "./pages/TransferencePage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<TransferencePage />} />
      </Routes>

      <Footer />
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
