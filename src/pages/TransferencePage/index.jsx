import styled from "styled-components";
import TransferMobile from "./components/TransferMobile";
import TransferDesktop from "./components/TransferDesktop";
import Prices from "./components/Prices";
import FrequentAskedQuestions from "../../components/FrequentAskedQuestions";
import OrderSteps from "./components/OrderSteps";
import ContactForm from "../../components/ContactForm";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 60px;
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

export default function TransferencePage() {

  const isMobile = window.innerWidth < 1000;

  return (
    <>
      <Wrapper>
        {isMobile ? (
          <TransferMobile />
        ) : (
          <TransferDesktop />
        )}
      </Wrapper>
      <Sections>
        <Prices />
        <FrequentAskedQuestions />
        <OrderSteps />
        <ContactForm />
      </Sections>
    </>
  );
}
