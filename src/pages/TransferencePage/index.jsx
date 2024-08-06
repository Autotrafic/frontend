import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import TransferMobile from "./components/TransferMobile";
import TransferDesktop from "./components/TransferDesktop";
import Prices from "./components/Prices";
import FrequentAskedQuestions from "../../components/FrequentAskedQuestions";
import OrderSteps from "./components/OrderSteps";
import ContactForm from "../../components/ContactForm";
import { TRANSFERENCE_ID } from "../../utils/constants";
import Comparatives from "./components/Comparatives";
import GoogleReviewsCarousel from "../../components/reusable/GoogleReviewsCarousel/GoogleReviewsCarousel";
import { apiRequest } from "../../utils/request";
import { useEffect, useState } from "react";

export default function TransferencePage() {
  const { referralId } = useParams();
  const isMobile = window.innerWidth < 1000;

  const [isReferralValid, setIsReferralValid] = useState(false);

  useEffect(() => {
    (async () => {
      if (referralId) {
        const { isValid } = await apiRequest(`referral/id/validate?id=${referralId}`);
        setIsReferralValid(isValid);
      }
    })();
  }, [referralId]);

  return (
    <>
      <Wrapper id={TRANSFERENCE_ID}>{isMobile ? <TransferMobile /> : <TransferDesktop />}</Wrapper>
      <Sections>
        <Prices />
        <GoogleReviewsCarousel />
        <Comparatives />
        <OrderSteps />
        <FrequentAskedQuestions />
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
