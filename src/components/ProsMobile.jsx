import { faBolt, faHeadset, faRightLeft, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 85%;
  margin-bottom: 3em;
`;

const ProItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #fff;
`;

const Text = styled.span`
  font-weight: 500;
  color: #fff;
`;

export default function ProsMobile() {
  const pros = [
    { icon: faBolt, text: "Proceso rápido y sencillo" },
    { icon: faRightLeft, text: "Garantía de devolución" },
    { icon: faTruckFast, text: "Envío gratis" },
    { icon: faHeadset, text: "Atención 24/7" },
  ];

  return (
    <Container>
      {pros.map((pro) => (
        <ProItem>
          <Icon icon={pro.icon} size="xl"/>
          <Text>{pro.text}</Text>
        </ProItem>
      ))}
    </Container>
  );
}
