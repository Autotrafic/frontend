import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../services/order";
import CheckIcon from "../../../components/reusable/CheckIcon";

export default function UploadedDocsPage() {
  const { orderId } = useParams();

  const [order, setOrder] = useState();

  useEffect(() => {
    (async () => {
      const orderReceived = await getOrderById(orderId);
      setOrder(orderReceived);
    })();
  }, [orderId]);

  return (
    <Wrapper>
      {order ? (
        <Container>
          <CheckIcon />

          <p>
            <strong>
              ¡Fantástico {order.user.fullName.split(" ")[0]}! Tus documentos se han subido
              correctamente
            </strong>
          </p>

          <TextContainer>
            <p>
              Hemos enviado un correo electrónico a la dirección {order.user.email} con los
              datos del trámite y los siguientes pasos.
            </p>

            <p>Agradecemos muchísimo su confianza. ¡Esperamos verle de nuevo por aquí!</p>
          </TextContainer>
        </Container>
      ) : (
        <span>Cargando...</span>
      )}
    </Wrapper>
  );
}

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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 580px;
  margin-top: 3rem;
`;
