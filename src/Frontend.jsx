import "./App.css";
import styled from "styled-components";
import Drop from "./components/Drop";
import OrderSteps from "./components/OrderSteps";
import NecessaryDocumentsList from "./components/NecessaryDocumentsList";
import FrequentAskedQuestions from "./components/FrequentAskedQuestions";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar/navbar";
import TransferLeftSide from "./components/TransferLeftSide";
import { useContext, useEffect } from "react";
import { UserContext, UserProvider } from "./context/user";
import SmartForm from "smartForm/SmartForm";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 70px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 3em 1.5em;
  display: flex;
  gap: 10vw;
`;

const LeftSide = styled.div`
  flex: 4;
`;

const RightSide = styled.div`
  position: relative;
  width: 100%;
  flex: 3;
`;

const SmartFormContainer = styled.div`
  padding: 5px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2), 2px 0 5px rgba(0, 0, 0, 0.2),
    -4px 0 5px rgba(0, 0, 0, 0.2);
`;

function App() {
  const { registerLog } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      await registerLog("Enters into the page");
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <LeftSide>
            <TransferLeftSide />
          </LeftSide>
          <RightSide>
            <SmartFormContainer>
              <SmartForm />
            </SmartFormContainer>
            <Drop />
          </RightSide>
        </Container>
      </Wrapper>
      <OrderSteps />
      <NecessaryDocumentsList />
      <FrequentAskedQuestions />
      <ContactForm />
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
