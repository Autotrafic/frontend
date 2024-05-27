import styled from "styled-components";
import Title from "../../../components/reusable/Title";
import { colors } from "../../../utils/styles";
import { PRICES_SECTION_ID } from "../../../utils/constants";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  padding: 0 2rem;
`;

const PricesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`;

const PriceContainer = styled.div`
  width: 100%;
  max-width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px solid ${colors.primaryColor};
  border-radius: 15px;
  padding: 1em 2em;
  gap: 1em;
`;

const PriceTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
`;

const Price = styled.span`
  font-size: 28px;
`;

const ConditionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: center;
`;

const Incluiding = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.primaryColor};
`;

const Condition = styled.span`
  font-size: 14px;
`;

export default function Prices() {
  const prices = [
    { title: "Coche", price: "119,95" },
    { title: "Moto", price: "119,95" },
    { title: "Ciclomotor", price: "94,95" },
  ];

  return (
    <Container id={PRICES_SECTION_ID}>
      <Title middleLine>Los mejores precios del mercado de mayo 2024</Title>
      <PricesContainer>
        {prices.map((price) => (
          <PriceContainer>
            <PriceTitle>{price.title}</PriceTitle>
            <Price>{price.price} €</Price>
            <Incluiding>TODO INCLUIDO</Incluiding>
            <ConditionsContainer>
              <Condition>Gestión del ITP incluida</Condition>
              <Condition>Envío a domicilio incluido</Condition>
            </ConditionsContainer>
          </PriceContainer>
        ))}
      </PricesContainer>
    </Container>
  );
}
