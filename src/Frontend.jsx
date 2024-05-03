import "./App.css";
import styled from "styled-components";
import OrderSteps from "./components/OrderSteps";
import NecessaryDocumentsList from "./components/NecessaryDocumentsList";
import FrequentAskedQuestions from "./components/FrequentAskedQuestions";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar/navbar";
import { useContext, useEffect } from "react";
import { UserContext, UserProvider } from "./context/user";
import TransferMobile from "./components/TransferMobile";
import TransferDesktop from "./components/TransferDesktop";
import Prices from "./components/Prices";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  margin-bottom: 4.5em;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
  margin-bottom: 4em;

  @media (max-width: 600px) {
    margin-top: 6em;
  }
`;

function App() {
  const { userInfo, registerLog } = useContext(UserContext);

  const isMobile = window.innerWidth < 1000;

  useEffect(() => {
    (async () => {
      await registerLog("Accede a la página: Transferencia de vehículo");
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        {isMobile ? (
          <TransferMobile userInfo={userInfo} />
        ) : (
          <TransferDesktop userInfo={userInfo} />
        )}
      </Wrapper>
      <Sections>
        <Prices />
        <FrequentAskedQuestions />
        <NecessaryDocumentsList />
        <OrderSteps />
        <ContactForm />
      </Sections>

      <Footer />
    </>
  );
}

function Frontend() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Frontend;
