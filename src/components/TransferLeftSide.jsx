import styled from "styled-components";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import arrow from "../assets/right-arrow-gif.gif";
import googleLogo from "../assets/google-logo.svg";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../utils/styles";

export default function TransferLeftSide() {
  const TransferContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;

    @media (max-width: 476px) {
      max-width: 85%;
      gap: 22px;
    }
  `;

  const ExplanationText = styled.p`
    font-size: 14px;
    margin: 0;
    @media (max-width: 476px) {
      color: #3f3f3f;
    }
  `;

  const TransferSteps = styled.div`
    display: flex;
    align-items: center;
  `;

  const StepContainer = styled.div`
    width: ${({ $width }) => ($width ? $width : "140px")};
    background-color: ${colors.primaryColor};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
    justify-content: center;
  `;

  const NumberStepContainer = styled.p`
    color: white;
    font-size: 16px;
    margin: 0;
    padding-top: 5px;
    font-weight: bold;
  `;

  const TextStepContainer = styled.p`
    color: white;
    font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "12px")};
    padding: 0 10px 5px 10px;
    margin: 0;
    text-align: center;
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

  const CheckIcon = styled(FontAwesomeIcon)`
    color: ${colors.primaryColor};
    width: 20px;
    height: 20px;
    color: #03ce00;
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

    @media (max-width: 476px) {
      max-width: 300px;
    }
  `;

  const ContactButtonsContainer = styled.div`
    display: flex;
    gap: 30px;
    @media (max-width: 476px) {
      width: 85%;
      flex-wrap: wrap;
      gap: 15px;
    }
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
    width: 120px;
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
    width: 120px;
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

  const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: white;
    border-radius: 4px;
    padding: 15px 15px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  `;

  const ReviewsText = styled.p`
    font-size: 15px;
    font-weight: bold;
    margin: 0;
    color: #242424;
  `;

  const ReviewsStarsContainer = styled.div`
    display: flex;
    gap: 2px;
  `;

  const ReviewsStar = styled(FontAwesomeIcon)`
    width: 20px;
    height: 20px;
    color: #ffc106;
  `;

  return (
    <>
      <TransferContainer>
        <Title>Cambio de nombre de vehículo online</Title>
        <ExplanationText>
          Nunca había sido tan fácil tramitar la transferencia de tu vehículo.
          Con nuestra tecnología, ya no necesitas preocuparte por todo el
          papeleo. Tan solo te tomará 2 minutos en rellenar el formulario y
          completar el trámite 👍.
        </ExplanationText>
        {/*  <TransferSteps>
          <StepContainer>
            <NumberStepContainer>1.</NumberStepContainer>
            <TextStepContainer>
              Introduce los datos de tu vehículo
            </TextStepContainer>
          </StepContainer>
          <img
            src={arrow}
            alt=""
            style={{
              width: "25px",
              height: "30px",
              marginLeft: "3px",
              marginRight: "3px",
            }}
          />
          <StepContainer $width={"170px"}>
            <NumberStepContainer>2.</NumberStepContainer>
            <TextStepContainer $fontSize={"11px"}>
              Obtén el precio al momento y paga online
            </TextStepContainer>
          </StepContainer>
          <img
            src={arrow}
            alt=""
            style={{
              width: "25px",
              height: "30px",
              marginLeft: "3px",
              marginRight: "3px",
            }}
          />
          <StepContainer>
            <NumberStepContainer>3.</NumberStepContainer>
            <TextStepContainer>Recibe el provisional</TextStepContainer>
          </StepContainer>
        </TransferSteps> */}
        <AdvantagesListContainer>
          <AdvantageListItem>
            <CheckIcon icon={faSquareCheck} />
            <ListText>Proceso rápido y sencillo</ListText>
          </AdvantageListItem>
          <AdvantageListItem>
            <CheckIcon icon={faSquareCheck} />
            <ListText>Envío gratis del nuevo permiso de circulación</ListText>
          </AdvantageListItem>
          <AdvantageListItem>
            <CheckIcon icon={faSquareCheck} />
            <ListText>Provisional en minutos</ListText>
          </AdvantageListItem>
        </AdvantagesListContainer>
        <ReviewsContainer>
          <img src={googleLogo} alt="" style={{ width: "110px" }} />
          <ReviewsText>EXCELENTE</ReviewsText>
          <ReviewsStarsContainer>
            <ReviewsStar icon={faStar} />
            <ReviewsStar icon={faStar} />
            <ReviewsStar icon={faStar} />
            <ReviewsStar icon={faStar} />
            <ReviewsStar icon={faStar} />
          </ReviewsStarsContainer>
          <ReviewsText>123 reseñas </ReviewsText>
        </ReviewsContainer>
      </TransferContainer>
      <AnyQuestionContainer>
        <Title lineWidth={"15%"}>¿Alguna duda?</Title>
        <ExplanationText>
          Si tienes alguna duda durante el proceso, no dudes en contactar con
          nosotros. Uno de nuestros gestores estará encantado de ayudarte.
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
