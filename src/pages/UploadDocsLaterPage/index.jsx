import styled from "styled-components";
import confetiCheck from "../../assets/check-confetti.svg";
import confetiSquare from "../../assets/confeti_square.gif";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../services/order";

const ICON_DIMENSION = 100;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 12rem 1.5rem 0 1.5rem;
`;

const Container = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  margin: 0 auto;
`;

const Icon = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: 32px;
`;

const Check = styled.div`
  position: relative;
  background: url(${confetiCheck}) center center no-repeat;
  background-size: cover;
  width: ${ICON_DIMENSION}px;
  height: ${ICON_DIMENSION}px;
  z-index: 1;
`;

const Square = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${confetiSquare}) center center no-repeat;
  background-size: 97% 97%;
  width: ${ICON_DIMENSION}px;
  height: ${ICON_DIMENSION}px;
  z-index: 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 580px;
  margin-top: 3rem;
`;

export function UploadDocsLaterPage() {
  const { orderId } = useParams();

  const [order, setOrder] = useState();

  useEffect(() => {
    (async () => {
      const orderReceived = await getOrderById(orderId);
      setOrder(orderReceived);
    })();
  }, [orderId]);

  console.log('asd', order)
  return (
    <Wrapper>
      {order ? (
        <Container>
          <Icon>
            <Check />
            <Square />
          </Icon>

          <p>
            <strong>
              ¡Fantástico {order.billData.fullName.split(" ")[0]}! Hemos recibido tus datos
              correctamente
            </strong>
          </p>

          <TextContainer>
            <p>
              Hemos enviado un correo electrónico a la dirección {order.billData.email} con los
              documentos que necesitamos para continuar con el trámite.
            </p>

            <p>Responde al mismo correo con una foto para cada documento.</p>

            <p>Agradecemos muchísimo su confianza. ¡Esperamos verle de nuevo por aquí!</p>
          </TextContainer>
        </Container>
      ) : (
        <span>Cargando...</span>
      )}
    </Wrapper>
  );
}
