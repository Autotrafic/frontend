import styled from "styled-components";
import Title from "../../../components/reusable/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import GoogleReviewsBox from "../../../components/reusable/GoogleReviewsBox";
import dgtLogo from "../../../assets/dgt.svg";
import ministerioImg from "../../../assets/ministerio.svg";
import colegioImg from "../../../assets/colegio-simple-logo.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../utils/styles";

export default function TransferContentMobile({ isReferralValid }) {
  return (
    <TransferContainer $isReferralValid={isReferralValid}>
      <Title fontSize={"21px"}>
        Cambia de nombre tu vehículo online en menos de 5 minutos
      </Title>
      <TextWrapper>
        <SubTitle>
          Gestoría Online especializada en la Transferencia de Vehículos con la
          DGT
        </SubTitle>
        <ExplanationText>
          NOS ENCARGAMOS DE TODO - MEJOR PRECIO GARANTIZADO
        </ExplanationText>
      </TextWrapper>

      <BoxesContainer>
        <img
          src={colegioImg}
          alt=""
          width={125}
          style={{ borderRadius: "2px" }}
        />
        <img src={dgtLogo} alt="" width={60} />
        <img
          src={ministerioImg}
          alt=""
          width={90}
          style={{ borderRadius: "2px" }}
        />
      </BoxesContainer>

      <WhatsContactContainer>
        <WhatsText>Te guiamos por Whatsapp en todo momento</WhatsText>
        <WhatsappButtonContainer href="https://wa.me/643219297" target="_blank">
          <WhatsLink $isReferralValid={isReferralValid}>
            <WhatsIcon icon={faWhatsapp} size="xl" />
            Habla con un gestor ahora
          </WhatsLink>
        </WhatsappButtonContainer>
        <WhatsText>Respondemos al instante</WhatsText>
      </WhatsContactContainer>

      <GoogleReviewsAndPhoneButtonContainer>
        {isReferralValid ? "" : <GoogleReviewsBox />}

        {/*  <ContactLink href="tel:+34643219297" style={{ textDecoration: "none" }}>
          <ContactButton>
            <ContactIcon icon={faPhone} />
            <ContactButtonText>Llama a un gestor</ContactButtonText>
          </ContactButton>
        </ContactLink> */}
      </GoogleReviewsAndPhoneButtonContainer>
    </TransferContainer>
  );
}

const WhatsIcon = styled(FontAwesomeIcon)``;

const TransferContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ $isReferralValid }) =>
    $isReferralValid ? "gap: 2.2em;" : "font-size: 18px;"}
  ${({ $isReferralValid }) => ($isReferralValid ? "" : "margin-bottom: 1em;")}
`;

const WhatsappButtonContainer = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
const WhatsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  border-radius: 6px;
  background-color: #51ca50;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  color: white;
  margin: 0.5rem 0;
  ${({ $isReferralValid }) =>
    $isReferralValid ? "margin: 0.3rem 0;" : "margin: 0.5rem 0;"}
  ${({ $isReferralValid }) =>
    $isReferralValid ? "padding: 0.4rem 1rem;" : "padding: 0.5rem 1.5rem;"}
  ${({ $isReferralValid }) =>
    $isReferralValid ? "font-size: 16px;" : "font-size: 18px;"}
  ${({ $isReferralValid }) =>
    $isReferralValid ? "width: 94%;" : "width: 100%;"}
  width: -moz-fit-content;
  font-weight: 600;
  text-decoration: inherit;
  border: none;
`;

const SubTitle = styled.p`
  font-size: 15px;
  color: #313131;
  margin: 0;
  font-weight: 600;
  text-align: center;
`;

const ExplanationText = styled.p`
  font-size: 13px;
  margin: 0;
  line-height: 22px;
  text-align: center;
`;

const BoxesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const WhatsContactContainer = styled.div`
  margin: 0;
`;

const WhatsText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #383838;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const GoogleReviewsAndPhoneButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ContactLink = styled.a`
  flex: 1;
`;

const ContactButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid ${colors.primaryColor};
  color: white;
  background-color: ${colors.primaryColor};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
`;

const ContactIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  padding-left: 10px;
  transition: 0.3s;
  color: white;
`;

const ContactButtonText = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  padding: 10px 10px;
`;
