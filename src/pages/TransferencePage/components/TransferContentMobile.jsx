import styled from "styled-components";
import Title from "../../../components/reusable/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import GoogleReviewsBox from "../../../components/reusable/GoogleReviewsBox";
import dgtLogo from "../../../assets/dgt.svg";
import ministerioImg from "../../../assets/ministerio.svg";
import colegioImg from "../../../assets/colegio-simple-logo.png";
import numberOneImg from "../../../assets/number-one.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../utils/styles";

export default function TransferContentMobile() {
  return (
    <TransferContainer>
      <Title fontSize={"21px"}>Cambio de nombre online</Title>

      <TextWrapper>
        {/* <SubTitleTextWrapper>
          <SubTitle>Tramita de forma </SubTitle>
          <BlueSubTitle>rápida</BlueSubTitle> <SubTitle>y</SubTitle>
          <BlueSubTitle>sencilla</BlueSubTitle>
        </SubTitleTextWrapper> */}

        <ExplanationText>
          Transfiere tu vehículo en sólo 5 minutos sin pedir cita, sin papeleos
          y sin riesgos.
        </ExplanationText>
        <ExplanationText>
          Ofrecemos la mejor calidad en servicio, atención personalizada y
          satisfacción del cliente
        </ExplanationText>
      </TextWrapper>

      <BoxesContainer>
        <img src={dgtLogo} alt="" width={75} />

        <img
          src={ministerioImg}
          alt=""
          width={90}
          style={{ borderRadius: "2px" }}
        />
      </BoxesContainer>

      <WhatsContactContainer>
        <WhatsText>
          Te guiamos por Whatsapp en todo el proceso, respondemos al instante
        </WhatsText>
        <a
          href="https://wa.me/643219297"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <WhatsLink>
            <WhatsIcon icon={faWhatsapp} size="xl" />
            Habla con un gestor ahora
          </WhatsLink>
        </a>
      </WhatsContactContainer>

      {/*  <GoogleReviewsAndPhoneButtonContainer>
        <ContactLink
          href="callto:+34643219297"
          style={{ textDecoration: "none" }}
        >
          <ContactButton>
            <ContactIcon icon={faPhone} />
            <ContactButtonText>Llama a un gestor</ContactButtonText>
          </ContactButton>
        </ContactLink>
      </GoogleReviewsAndPhoneButtonContainer> */}
    </TransferContainer>
  );
}

const WhatsIcon = styled(FontAwesomeIcon)``;

const TransferContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1.5em;
`;

const SubTitleTextWrapper = styled.div`
  display: flex;
`;

const SubTitle = styled.p`
  font-size: 15px;
  color: #313131;
  margin: 0;
  font-weight: 600;
  text-align: center;
`;

const BlueSubTitle = styled.p`
  font-size: 15px;
  color: ${colors.primaryColor};
  margin: 0;
  font-weight: 600;
  text-align: center;
  margin: 0 5px;
`;

const NumberOneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
  padding: 5px 12px 5px 5px;
  border-radius: 3px;
  background-color: #f7f7f7;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
`;

const ExplanationText = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 22px;
  color: #131313;
  text-align: center;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin: 1.3em 0;
  width: 85%;
`;

const WhatsContactContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhatsText = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0;
  color: #505050;
`;

const WhatsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -moz-column-gap: 0.7rem;
  column-gap: 0.7rem;
  border-radius: 6px;
  background-color: #51ca50;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  color: white;
  margin-top: 0.5rem;
  padding: 0.4rem 1rem;
  font-size: 17px;
  width: -moz-fit-content;
  width: 100%;
  font-weight: 600;
  text-decoration: inherit;
  border: none;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  margin-top: 15px;
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
