import { faBolt, faHeadset, faRightLeft, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function ProsMobile() {
  const pros = [
    { icon: faBolt, text: "PROCESO RÁPIDO Y SENCILLO" },
    { icon: faRightLeft, text: "GARANTÍA DE DEVOLUCIÓN" },
    { icon: faTruckFast, text: "ENVÍO GRATIS" },
    { icon: faHeadset, text: "ATENCIÓN 24/7" },
  ];

  return (
    <Container>
      {pros.map((pro) => (
        <ProItem>
          <Icon icon={pro.icon} size="xl" />
          <Text>{pro.text}</Text>
        </ProItem>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 75%;
  max-width: 500px;

  @media (max-width: 400px) {
    width: 95%;
  }
`;

const ProItem = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #fff;
`;

const Text = styled.span`
  font-weight: 500;
  color: #fff;

  @media (max-width: 415px) {
    font-size: 14px;
  }
`;
