import styled from "styled-components";
import Title from "../../../components/reusable/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Comparatives() {
  return (
    <Container>
      <Title middleLine>Razones para tramitar con nosotros</Title>
      <ComparativesStyled>
        <ComparativeBox />
        <ComparativeBox isQuality />
      </ComparativesStyled>
    </Container>
  );
}

function ComparativeBox({ isQuality }) {
  const comparativeItems = isQuality ? goodComparations : badComparations;

  return (
    <ComparativeBoxStyled $isQuality={isQuality}>
      <ComparativeTitle>
        {isQuality
          ? "Transferencia con Gestoría AutoTrafic"
          : "Transferencia con una gestoría convencional"}
      </ComparativeTitle>
      <ComparativeList>
        {comparativeItems.map((comparation) => (
          <ComparativeItem>
            {isQuality ? (
              <FontAwesomeIcon icon={faCheck} size="xs" />
            ) : (
              <FontAwesomeIcon icon={faXmark} size="xs" />
            )}
            {comparation}
          </ComparativeItem>
        ))}
      </ComparativeList>
    </ComparativeBoxStyled>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 0 2rem;
  align-items: center;
`;

const ComparativesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
`;

const ComparativeBoxStyled = styled.div`
  color: ${({ $isQuality }) => ($isQuality ? "rgb(4 120 87/1)" : "rgb(190 18 60/1)")};
  background-color: ${({ $isQuality }) =>
    $isQuality ? "rgba(209,250,229,.7)" : "rgba(255,228,230,.75)"};
  border-radius: 0.5rem;
  width: 100%;
  padding: 2rem;
  height: auto;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const ComparativeTitle = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const ComparativeList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ComparativeItem = styled.li`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-top: 0.7rem;

  @media (min-width: 768px) {
    white-space: nowrap;
  }
`;

const goodComparations = [
  "Sin cita previa",
  "Disponible cualquier hora del día",
  "Proceso fácil y rápido",
  "Asesoramiento con un gestor durante todo el proceso",
  "Precio muy económico",
];

const badComparations = [
  "Con cita previa",
  "Colas y largas esperas",
  "Sólo en horario laboral",
  "Sin asesoramiento personalizado",
  "Precio elevado",
];