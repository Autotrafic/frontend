import styled from "styled-components";
import { colors } from "../../utils/styles";

export default function Title({ children, lineWidth, middleLine, fontSize }) {
  return (
    <Container $middleLine={middleLine}>
      <Text $fontSize={fontSize}>{children}</Text>
      <Line $lineWidth={lineWidth} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: ${({ $middleLine }) => ($middleLine ? "center" : "flex-start")};

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const Text = styled.h1`
  color: ${colors.black} !important;
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "22px")};
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
