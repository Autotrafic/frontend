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
import ReferralPageAlert from "../../components/ReferralPageAlert";
import ForCompaniesSection from "./components/ForCompanies";

export default function TransferencePage() {
  const { referralId } = useParams();
  const isMobile = window.innerWidth < 1000;

  const [isReferralValid, setIsReferralValid] = useState(false);

  useEffect(() => {
    (async () => {
      if (referralId) {
        const { isValid } = await apiRequest(
          `referral/id/validate?id=${referralId}`
        );
        setIsReferralValid(isValid);
      }
    })();
  }, [referralId]);

  return (
    <>
      <ReferralPageAlert isReferralValid={isReferralValid} />
      <Wrapper id={TRANSFERENCE_ID} $isReferralValid={isReferralValid}>
        {isMobile ? (
          <TransferMobile isReferralValid={isReferralValid} />
        ) : (
          <TransferDesktop isReferralValid={isReferralValid} />
        )}
      </Wrapper>
      <Sections>
        <Prices />
        <GoogleReviewsCarousel />
        <Comparatives />
        <OrderSteps />
        <ForCompaniesSection />
        <FrequentAskedQuestions />
        {/* <MoreProducts /> */}
        <ContactForm />
      </Sections>
    </>
  );
}

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
