import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faFileArrowDown,
  faFileShield,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "../utils/styles";

const bigPhoneScreenMedia = "476px";

export default function OrderSteps() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
    margin-bottom: 50px;
    padding: 0 20px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      margin-top: 40px;
      margin-bottom: 0;
      gap: 20px;
    }
  `;

  const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `;
  const Title = styled.h2`
    margin: 0;

    @media (max-width: ${bigPhoneScreenMedia}) {
      text-align: center;
    }
  `;

  const Line = styled.div`
    width: 40%;
    height: 3px;
    background-color: ${colors.primaryColor};
    border-radius: 5px;
  `;

  const StepContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${bigPhoneScreenMedia}) {
      max-width: 320px;
    }
  `;

  const StepsGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      gap: 20px;
    }
  `;

  const StepIcon = styled(FontAwesomeIcon)`
    color: ${colors.primaryColor};
    width: 60px;
    height: 60px;
    margin-right: 45px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      display: none;
    }
  `;

  const StepNumber = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: ${colors.primaryColor};
    margin: 0;
    margin-right: 20px;
  `;

  const TextContainer = styled.div`
    width: 420px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const StepTitle = styled.p`
    color: ${colors.primaryColor};
    font-weight: bold;
    margin: 0;
  `;

  const StepText = styled.p`
    color: ${colors.primaryGrey};
    font-size: 13px;
    margin: 0;
  `;

  return (
    <Container>
      <TitleContainer>
        <Title>PASOS PARA REALIZAR EL TRÁMITE</Title>
        <Line />
      </TitleContainer>

      <StepsGroupContainer>
        <StepContainer>
          <StepIcon icon={faFileArrowDown} />
          <StepNumber>01</StepNumber>
          <TextContainer>
            <StepTitle>Facilítanos tus datos</StepTitle>
            <StepText>
              Introduce los datos del vehículo para conocer el precio de la
              transferencia.
            </StepText>
          </TextContainer>
        </StepContainer>

        <StepContainer>
          <StepIcon icon={faCreditCard} rotation={90} />
          <StepNumber>02</StepNumber>
          <TextContainer>
            <StepTitle>Paga online</StepTitle>
            <StepText>
              Una vez calcules el precio de la transferencia, paga online de
              forma sencilla y segura. Recibirás un correo de confirmación con
              la información de tu pedido.
            </StepText>
          </TextContainer>
        </StepContainer>

        <StepContainer>
          <StepIcon icon={faFileShield} />
          <StepNumber>03</StepNumber>
          <TextContainer>
            <StepTitle>Recibe el provisional</StepTitle>
            <StepText>
              Adjunta las fotos de los documentos del vehículo, y el trámite
              quedará hecho. Posteriormente recibirás el permiso provisional,
              con el que ya podrás circular a su nombre. El nuevo permiso de
              circulación llegará a tu domicilio en 1/2 semanas.
            </StepText>
          </TextContainer>
        </StepContainer>
      </StepsGroupContainer>
    </Container>
  );
}
