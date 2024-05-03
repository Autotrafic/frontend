import styled from "styled-components";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../utils/styles";
import GoogleReviewsBox from "./reusable/GoogleReviewsBox";
import dgtLogo from "../assets/dgt.svg";
import ministerioImg from "../assets/ministerio.svg";

const TransferContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const ExplanationText = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 22px;
`;

const AdvantagesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AdvantageListItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ListText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const AnyQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 45px;
`;

const ContactButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const ContactIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: ${colors.primaryColor};
  padding-left: 10px;
  transition: 0.3s;
`;

const ContactButtonText = styled.p`
  font-size: 14px;
  color: ${colors.primaryColor};
  margin: 0;
  padding: 10px 10px;
  transition: 0.3s;
`;

const ContactButtonWhatsapp = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid ${colors.primaryColor};
  transition: 0.3s;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    border: none;
    background-color: #03ce00;
    transition: 0.3s;
    transform: translateY(5px);

    ${ContactIcon} {
      color: white;
    }
    ${ContactButtonText} {
      color: white;
    }
  }
`;

const ContactButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid ${colors.primaryColor};
  transition: 0.3s;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    border: none;
    background-color: ${colors.primaryColor};
    transition: 0.3s;
    transform: translateY(5px);

    ${ContactIcon} {
      color: white;
    }
    ${ContactButtonText} {
      color: white;
    }
  }
`;

const BoxesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function TransferLeftSide() {
  const isMobile = window.innerWidth < 1000;

  return (
    <>
      <TransferContainer>
        <Title>Cambio de nombre de vehículo online</Title>
        <ExplanationText>
          Nunca había sido tan fácil tramitar la transferencia de un vehículo. Realiza el cambio de
          nombre de cualquier vehículo en 5 minutos.
        </ExplanationText>
        {!isMobile && (
          <AdvantagesListContainer>
            <AdvantageListItem>
              ✅<ListText>Proceso rápido y sencillo</ListText>
            </AdvantageListItem>
            <AdvantageListItem>
              ✅<ListText>Envío gratis del nuevo permiso de circulación</ListText>
            </AdvantageListItem>
            <AdvantageListItem>
              ✅<ListText>Provisional en minutos</ListText>
            </AdvantageListItem>
          </AdvantagesListContainer>
        )}

        <BoxesContainer>
          <GoogleReviewsBox />
          <img src={dgtLogo} alt="" width={100} />
          <img src={ministerioImg} alt="" width={150} />
        </BoxesContainer>
      </TransferContainer>
      <AnyQuestionContainer>
        <Title lineWidth={"15%"}>¿Alguna duda?</Title>
        <ExplanationText>
          Si tienes alguna duda durante el proceso, no dudes en contactar con nosotros. Uno de
          nuestros gestores estará encantado de ayudarte.
        </ExplanationText>
        <ContactButtonsContainer>
          <ContactButtonWhatsapp>
            <ContactIcon icon={faWhatsapp} />
            <ContactButtonText>Whatsapp</ContactButtonText>
          </ContactButtonWhatsapp>
          <ContactButton>
            <ContactIcon icon={faPhone} />
            <ContactButtonText>Teléfono</ContactButtonText>
          </ContactButton>
          <ContactButton>
            <ContactIcon icon={faEnvelope} />
            <ContactButtonText>Email</ContactButtonText>
          </ContactButton>
        </ContactButtonsContainer>
      </AnyQuestionContainer>
    </>
  );
}
