import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../services/order";
import CheckIcon from "../../../components/reusable/CheckIcon";
import notifySlack from "../../../services/notifier";

export default function UploadDocsLaterPage() {
  const { orderId } = useParams();

  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const orderReceived = await getOrderById(orderId);
        setOrder(orderReceived);
        setLoading(false);
        notifySlack(`${orderReceived}`);
      } catch (error) {
        const errorMessage = `Error while receiving order by ID on documents later thankyou page: ${error}.`;
        notifySlack(errorMessage);

        setOrder(null);
      }
    })();
  }, [orderId]);

  const fullName = order?.billData?.fullName || "";
  const firstName = fullName.split(" ")[0];
  const email = order?.billData?.email || "";

  return (
    <Wrapper>
      {loading ? (
        <span>Cargando...</span>
      ) : (
        <Container>
          {order ? (
            <>
              <CheckIcon />

              <p>
                <strong>¡Fantástico {fullName}! Hemos recibido tus datos correctamente</strong>
              </p>

              <TextContainer>
                <p>
                  Hemos enviado un correo electrónico a tu dirección de correo electrónico {email}{" "}
                  con los documentos que necesitamos para continuar con el trámite.
                </p>

                <p>Responde al mismo correo con una foto para cada documento.</p>

                <p>Agradecemos muchísimo su confianza. ¡Esperamos verle de nuevo por aquí!</p>

                <p>Puedes cerrar ésta ventana.</p>
              </TextContainer>
            </>
          ) : (
            <TextContainer>
              <p>
                Gracias por su compra. Pronto uno de nuestros gestores se pondrá en contacto
                contigo por WhatsApp.
              </p>

              <p>Puedes cerrar ésta ventana</p>
            </TextContainer>
          )}
        </Container>
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
