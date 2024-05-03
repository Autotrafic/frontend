import styled from "styled-components";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../utils/styles";
import GoogleReviewsBox from "./reusable/GoogleReviewsBox";
import dgtLogo from "../assets/dgt.svg";

const TransferContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ExplanationText = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 22px;
  text-align: center;
`;

const BoxesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const WhatsContactContainer = styled.div`
margin-bottom: 2em;
`;

const WhatsText = styled.p`
  margin-bottom: 5px;
  text-align: center;
  font-size: 13px;
`;

const WhatsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  background-color: #dbfac8;
  padding: 0.3rem 1rem;
  width: -moz-fit-content;
  width: 100%;
  border-radius: 2rem;
  color: #2eb047;
  font-weight: 600;
  text-decoration: inherit;
  border: 2px solid #2eb047;
`;

const WhatsIcon = styled(FontAwesomeIcon)``;

export default function TransferContentMobile() {
  return (
    <>
      <TransferContainer>
        <Title>Cambio de nombre de vehículo online</Title>
        <ExplanationText>
          Nunca había sido tan fácil tramitar la transferencia de un vehículo. Realiza el cambio de
          nombre de cualquier vehículo en 5 minutos.
        </ExplanationText>

        <BoxesContainer>
          <GoogleReviewsBox />
          <img src={dgtLogo} alt="" width={100} />
        </BoxesContainer>

        <WhatsContactContainer>
          <WhatsText>Habla con nosotros. Respondemos al instante.</WhatsText>
          <WhatsLink>
            <WhatsIcon icon={faWhatsapp} size="lg" />
            Atención al cliente
          </WhatsLink>
        </WhatsContactContainer>
      </TransferContainer>
    </>
  );
}
