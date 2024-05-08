import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { colors } from "../utils/styles";
import Title from "./reusable/Title";

const bigPhoneScreenMedia = "476px";

export default function NecessaryDocumentsList() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    align-self: center;

    @media (max-width: 620px) {
      max-width: 480px;
    }

    @media (max-width: ${bigPhoneScreenMedia}) {
      gap: 20px;
    }
  `;

  const DocumentsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;

  const DocumentsListItem = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
  `;

  const CheckIcon = styled(FontAwesomeIcon)`
    color: ${colors.primaryColor};
    width: 25px;
    height: 25px;
  `;

  const ListText = styled.p`
    color: ${colors.primaryGrey};
    font-size: 16px;
    margin: 0;
  `;

  return (
    <Container>
      <Title middleLine>Documentación necesaria</Title>
      <DocumentsListContainer>
        <DocumentsListItem>
          <CheckIcon icon={faCircleCheck} />
          <ListText>Documento de identidad del comprador y del vendedor (DNI / NIF / NIE)</ListText>
        </DocumentsListItem>
        <DocumentsListItem>
          <CheckIcon icon={faCircleCheck} />
          <ListText>Permiso de circulación</ListText>
        </DocumentsListItem>
        <DocumentsListItem>
          <CheckIcon icon={faCircleCheck} />
          <ListText>Ficha técnica del vehículo</ListText>
        </DocumentsListItem>
        <DocumentsListItem>
          <CheckIcon icon={faCircleCheck} />
          <ListText>Contrato de compraventa</ListText>
        </DocumentsListItem>
      </DocumentsListContainer>
    </Container>
  );
}
