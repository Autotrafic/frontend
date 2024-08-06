import styled from "styled-components";
import TransferMobile from "./components/TransferMobile";
import TransferDesktop from "./components/TransferDesktop";
import Prices from "./components/Prices";
import FrequentAskedQuestions from "../../components/FrequentAskedQuestions";
import OrderSteps from "./components/OrderSteps";
import ContactForm from "../../components/ContactForm";
import { TRANSFERENCE_ID } from "../../utils/constants";
import Comparatives from "./components/Comparatives";
import GoogleReviewsCarousel from "../../components/reusable/GoogleReviewsCarousel/GoogleReviewsCarousel";
import MoreProducts from "./components/MoreProducts";

export default function TransferencePage() {
  const isMobile = window.innerWidth < 1000;

  return (
    <>
      <Wrapper id={TRANSFERENCE_ID}>
        {isMobile ? <TransferMobile /> : <TransferDesktop />}
      </Wrapper>
      <Sections>
        <Prices />
        <GoogleReviewsCarousel />
        <Comparatives />
        <OrderSteps />
        <FrequentAskedQuestions />
        <MoreProducts />
        <ContactForm />
      </Sections>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  margin-bottom: 1.5em;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  @media (max-width: 600px) {
    margin-top: 6em;
  }
`;
