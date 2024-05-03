import styled from "styled-components";
import { colors } from "../utils/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: ${({ $middleLine }) => ($middleLine ? "center" : "flex-start")};

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const Text = styled.h1`
  color: ${colors.black} !important;
  font-size: 22px !important;
  font-weight: 600 !important;
  margin: 0;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Line = styled.div`
  width: ${({ $lineWidth }) => ($lineWidth ? $lineWidth : "30%")};
  height: 3px;
  background-color: ${colors.primaryColor};
  border-radius: 5px;

  @media (max-width: 1000px) {
    align-self: center;
  }
`;

function Title({ children, lineWidth, middleLine }) {
  return (
    <Container $middleLine={middleLine}>
      <Text>{children}</Text>
      <Line $lineWidth={lineWidth} />
    </Container>
  );
}

export default Title;
