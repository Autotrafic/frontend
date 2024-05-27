import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faFileArrowDown,
  faFileShield,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../utils/styles";
import Title from "../../../components/reusable/Title";
import { PROCESS_SECTION_ID } from "../../../utils/constants";

const bigPhoneScreenMedia = "476px";

export default function OrderSteps() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      margin-bottom: 0;
      gap: 20px;
    }
  `;

  const StepContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 620px) {
      max-width: 380px;
    }

    @media (max-width: ${bigPhoneScreenMedia}) {
      max-width: 320px;
    }
  `;

  const StepsGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      gap: 2.5em;
    }
  `;

  const StepIcon = styled(FontAwesomeIcon)`
    color: ${colors.primaryColor};
    width: 50px;
    height: 50px;
    margin-right: 45px;

    @media (max-width: 620px) {
      display: none;
    }

    @media (max-width: ${bigPhoneScreenMedia}) {
      display: none;
    }
  `;

  const StepNumber = styled.p`
    font-size: 50px;
    font-weight: bold;
    color: ${colors.primaryColor};
    margin: 0;
    margin-right: 20px;
  `;

  const TextContainer = styled.div`
    width: 420px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      gap: 5px;
    }
  `;

  const StepTitle = styled.p`
    color: ${colors.primaryColor};
    font-size: 24px;
    font-weight: bold;
    margin: 0;

    @media (max-width: ${bigPhoneScreenMedia}) {
      font-size: 15px;
    }
  `;

  const StepText = styled.p`
    color: ${colors.primaryGrey};
    font-size: 14px;
    margin: 0;

    @media (max-width: ${bigPhoneScreenMedia}) {
      font-size: 12px;
    }
  `;

  return (
    <Container id={PROCESS_SECTION_ID}>
      <Title middleLine>Paso a paso para cambiar de nombre tu vehículo</Title>

      <StepsGroupContainer>
        <StepContainer>
          <StepIcon icon={faKeyboard} rotation={90} />
          <StepNumber>1</StepNumber>
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
          <StepNumber>2</StepNumber>
          <TextContainer>
            <StepTitle>Paga online</StepTitle>
            <StepText>
              Paga online de forma sencilla y segura. Recibirás un correo de
              confirmación con la información de tu pedido.
            </StepText>
          </TextContainer>
        </StepContainer>

        <StepContainer>
          <StepIcon icon={faFileArrowDown} />
          <StepNumber>3</StepNumber>
          <TextContainer>
            <StepTitle>Adjunta la documentación</StepTitle>
            <StepText>
              Toma fotos al momento, o adjunta fotos que ya tengas de la
              documentación que necesitamos.
            </StepText>
          </TextContainer>
        </StepContainer>

        <StepContainer>
          <StepIcon icon={faFileShield} />
          <StepNumber>4</StepNumber>
          <TextContainer>
            <StepTitle>Recibe el provisional</StepTitle>
            <StepText>
              Verificada la documentación por nuestros gestores, en unos minutos
              le enviamos el permiso provisional para circular con su nuevo
              vehículo con total seguridad y poder realizar el seguro de este.
              En aproximadamente 10 días recibe el nuevo permiso de circulación
              en el domicilio que nos indique a través de servicio de mensajería
              sin coste adicional.
            </StepText>
          </TextContainer>
        </StepContainer>
      </StepsGroupContainer>
    </Container>
  );
}
