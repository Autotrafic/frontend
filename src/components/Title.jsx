import styled from "styled-components";
import { colors } from "../utils/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

const Text = styled.h1`
  color: ${colors.black} !important;
  font-size: 25px !important;
  font-weight: 600 !important;
  margin: 0;
`;

const Line = styled.div`
  width: ${({ $lineWidth }) => ($lineWidth ? $lineWidth : "30%")};
  height: 3px;
  background-color: ${colors.primaryColor};
  border-radius: 5px;
`;

function Title({ children, lineWidth }) {
  return (
    <Container>
      <Text>{children}</Text>
      <Line $lineWidth={lineWidth} />
    </Container>
  );
}

export default Title;
