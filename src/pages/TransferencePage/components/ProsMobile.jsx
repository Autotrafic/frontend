import {
  faBolt,
  faHeadset,
  faRightLeft,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../../utils/styles";

export default function ProsMobile() {
  const pros = [
    { icon: faBolt, text: "Provisional al momento" },
    { icon: faRightLeft, text: "Garantía de devolución" },
    { icon: faTruckFast, text: "Envío del nuevo permiso gratis" },
    { icon: faHeadset, text: "Atención 24/7" },
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
  background-color: #f3f3f3;
  padding: 28px;
  border-radius: 8px;
  box-shadow: -5px 5px 10px 2px rgba(0, 0, 0, 0.3);

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
  color: ${colors.primaryColor};
`;

const Text = styled.span`
  color: #111111;
  @media (max-width: 415px) {
    font-size: 14px;
  }
`;
