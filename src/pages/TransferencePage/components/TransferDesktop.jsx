import styled from "styled-components";
import SmartForm from "smartForm/SmartForm";
import TransferContentDesktop from "./TransferContentDesktop";
import Drop from "./Drop";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 3em 1.5em;
  display: flex;
  gap: 10vw;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0.5em 1.2em;
    max-width: 400px;
  }
`;

const LeftSide = styled.div`
  flex: 4;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const RightSide = styled.div`
  position: relative;
  width: 100%;
  flex: 3;
`;

const SmartFormContainer = styled.div`
  padding: 5px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2), 2px 0 5px rgba(0, 0, 0, 0.2),
    -4px 0 5px rgba(0, 0, 0, 0.2);
`;

export default function TransferDesktop() {
  return (
    <Container>
      <LeftSide>
        <TransferContentDesktop />
      </LeftSide>
      <RightSide>
        <SmartFormContainer>
          <SmartForm />
        </SmartFormContainer>
        <Drop />
      </RightSide>
    </Container>
  );
}
