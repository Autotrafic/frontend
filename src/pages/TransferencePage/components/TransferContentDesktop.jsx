import styled from "styled-components";
import Title from "../../../components/reusable/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../../../utils/styles";
import GoogleReviewsBox from "../../../components/reusable/GoogleReviewsBox";
import dgtLogo from "../../../assets/dgt.svg";
import ministerioImg from "../../../assets/ministerio.svg";
import colegioImg from "../../../assets/colegio-simple-logo.png";
import { logWhatsappClick } from "../../../services/logger";
import { onWhatsappClick } from "../../../utils/funcs";

export default function TransferContentDesktop() {
  return (
    <>
      <TransferContainer>
        <Title>Cambia de nombre tu vehículo online en menos de 5 minutos</Title>
        <div>
          <SubTitle>
            Gestoría Online especializada en la Transferencia de Vehículos con
            la DGT
          </SubTitle>
          <TopExplanationText>
            NOS ENCARGAMOS DE TODO - MEJOR PRECIO GARANTIZADO
          </TopExplanationText>
        </div>

        <AdvantagesListContainer>
          <div>
            <AdvantageListItem>
              ✅
              <ListTextBold>
                Gestión 100% online, rápida y sencilla
              </ListTextBold>
            </AdvantageListItem>
            <ListText>
              - Ahorra tiempo y dinero: Sin necesidad de desplazamientos ni
              largas colas
            </ListText>
          </div>
          <div>
            <AdvantageListItem>
              ✅
              <ListTextBold>
                Obtendrás el permiso provisional al momento para poder circular
              </ListTextBold>
            </AdvantageListItem>
            <ListText>
              - Todos tus documentos son manejados con total confidencialidad
            </ListText>
            <ListText>
              - Nuestro servicio está autorizado y regulado por la DGT
            </ListText>
          </div>
        </AdvantagesListContainer>

        <BoxesContainer>
          <GoogleReviewsBox />
          <img src={dgtLogo} alt="" width={90} />
          <img
            src={ministerioImg}
            alt=""
            width={112}
            style={{ borderRadius: "2px" }}
          />
          <img
            src={colegioImg}
            alt=""
            width={140}
            style={{ borderRadius: "2px" }}
          />
        </BoxesContainer>
      </TransferContainer>
      <AnyQuestionContainer>
        <Title lineWidth={"15%"}>¿Necesitas ayuda?</Title>
        <ExplanationText>
          Contacta ahora con nuestros gestores si necesitas ayuda con el proceso
          o tienes alguna duda, respondemos al instante.
        </ExplanationText>
        <ContactButtonsContainer>
          <ContactLink onClick={onWhatsappClick}
            style={{ textDecoration: "none" }}
          >
            <ContactButtonWhatsapp>
              <ContactIcon icon={faWhatsapp} />
              <ContactButtonText>Whatsapp</ContactButtonText>
            </ContactButtonWhatsapp>
          </ContactLink>

          <ContactLink
            href="tel:+34643219297"
            style={{ textDecoration: "none" }}
          >
            <ContactButton>
              <ContactIcon icon={faPhone} />
              <ContactButtonText>+34 643219297</ContactButtonText>
            </ContactButton>
          </ContactLink>
        </ContactButtonsContainer>
      </AnyQuestionContainer>
    </>
  );
}

const TransferContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SubTitle = styled.p`
  font-size: 18px;
  letter-spacing: 0.3px;
  word-spacing: 1.5px;
  margin: 0;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TopExplanationText = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 22px;
  font-style: italic;
`;
const ExplanationText = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 22px;
`;

const AdvantagesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AdvantageListItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 18px;
`;

const ListTextBold = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #383838;
`;

const ListText = styled.p`
  font-size: 14px;
  margin: 0;
  margin-left: 30px;
  color: #4f4f4f;
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
  width: 70%;
`;

const ContactIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  padding-left: 10px;
  transition: 0.3s;
  color: white;
`;

const ContactLink = styled.a`
  flex: 1;
`;

const ContactButtonText = styled.p`
  font-size: 14px;

  margin: 0;
  padding: 10px 10px;
  transition: 0.3s;
`;

const ContactButtonWhatsapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #03ce00;
  color: white;
  transition: 0.3s;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    border: none;
    border: 1px solid ${colors.primaryColor};
    transition: 0.3s;
    transform: translateY(5px);
    background-color: white;

    ${ContactIcon} {
      color: ${colors.primaryColor};
    }
    ${ContactButtonText} {
      color: ${colors.primaryColor};
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
  color: white;
  background-color: ${colors.primaryColor};
  transition: 0.3s;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    background-color: white;
    transition: 0.3s;
    transform: translateY(5px);

    ${ContactIcon} {
      color: ${colors.primaryColor};
    }
    ${ContactButtonText} {
      color: ${colors.primaryColor};
    }
  }
`;

const BoxesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
