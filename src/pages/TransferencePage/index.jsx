import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { apiRequest } from "../../utils/request";

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
      {isReferralValid && (
        <ReferralMessageContainer $isReferralValid={isReferralValid}>
          <ReferralMessageText>
            ¡Tienes <strong>10€ de descuento</strong> por venir de HistorialVehículo!
          </ReferralMessageText>
        </ReferralMessageContainer>
      )}

      <Wrapper id={TRANSFERENCE_ID} $isReferralValid={isReferralValid}>
        {isMobile ? <TransferMobile isReferralValid={isReferralValid} /> : <TransferDesktop isReferralValid={isReferralValid} />}
      </Wrapper>
      <Sections>
        <Prices />
        <GoogleReviewsCarousel />
        <Comparatives />
        <OrderSteps />
        <FrequentAskedQuestions />
        {/* <MoreProducts /> */}
        <ContactForm />
      </Sections>
    </>
  );
}

const ReferralMessageContainer = styled.div`
  margin-top: ${({ $isReferralValid }) => ($isReferralValid ? "60px" : "0")};
  display: flex;
  justify-content: center;
  padding: 0.6em 0.3em;
  width: 100%;
  background-color: #fae7c8;
  border-bottom: 2px solid #f78c00;
`;

const ReferralMessageText = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #f78c00;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${({ $isReferralValid }) => ($isReferralValid ? "0" : "60px")};
  margin-bottom: 1.5em;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  @media (max-width: 600px) {
    margin-top: 4em;
  }
`;
