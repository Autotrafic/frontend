import styled from "styled-components";
import Title from "../../../components/reusable/Title";
import {
  sectionBackgroundColor,
  sectionPadding,
} from "../../../utils/constants";
import informeDgt from "../../../assets/informe-dgt.png";
import etiquetaDgt from "../../../assets/etiqueta-dgt.png";
import logoDgt from "../../../assets/dgt.svg";
import duplicadoDgt from "../../../assets/duplicado-permiso.png";
import ProductBox from "../../../components/reusable/ProductBox";

const bigPhoneScreenMedia = "510px";
const screenWidth = window.innerWidth;
const isMobile = screenWidth < 510 ? true : false;

export default function MoreProducts() {
  return (
    <Container>
      <Title middleLine>Otros de nuestros productos oficiales DGT</Title>
      <ProductsContainer>
        {isMobile ? (
          <ProductBox
            image={informeDgt}
            productTitle={"Informe de vehículo"}
            productDescription={
              "Consigue el informe DGT oficial al momento, y conoce las cargas, el historial, el títular del vehículo, y mucho más"
            }
            buttonText={"Obtener informe DGT"}
          />
        ) : (
          <ProductBox
            image={informeDgt}
            productTitle={"Informe de vehículo"}
            productDescription={
              "Consigue el informe DGT oficial al momento sin certificado digital, y conoce las cargas, el historial, el títular del vehículo, y mucho más"
            }
            buttonText={"Obtener informe DGT"}
          />
        )}

        <ProductBox
          image={etiquetaDgt}
          productTitle={"Etiqueta medioambiental"}
          productDescription={
            "Compra el distintivo ambiental de la DGT en 1 simple paso, y recíbelo en casa cómodamente"
          }
          buttonText={"Obtener etiqueta DGT"}
        />
        {isMobile ? (
          <ProductBox
            image={logoDgt}
            productTitle={"Notificación de venta"}
            productDescription={
              "Evita problemas y comunica el cambio de titularidad de tu vehículo de forma rápida y sencilla"
            }
            buttonText={"Tramitar Not. de venta"}
          />
        ) : (
          <ProductBox
            image={logoDgt}
            productTitle={"Notificación de venta"}
            productDescription={
              "Evita problemas y comunica el cambio de titularidad de tu vehículo de forma rápida y sencilla"
            }
            buttonText={"Tramitar Notificación de venta"}
          />
        )}

        <ProductBox
          image={duplicadoDgt}
          productTitle={"Duplicado de permiso"}
          productDescription={
            "Realiza el duplicado de tu permiso de circulación o de conducir en 1 simple paso, y al mejor precio"
          }
          buttonText={"Tramitar duplicado"}
        />
      </ProductsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 2.5em 2em 4em 2em;
  align-items: center;
  background-color: ${sectionBackgroundColor};

  @media (max-width: ${bigPhoneScreenMedia}) {
    padding: 2.5em 0.2em 4em 0.2em;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${bigPhoneScreenMedia}) {
    gap: 30px;
  }
`;
