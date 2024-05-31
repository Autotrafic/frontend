import styled from "styled-components";
import confetiCheck from "../../assets/check-confetti.svg";
import confetiSquare from "../../assets/confeti_square.gif";

const ICON_DIMENSION = 100;

export default function CheckIcon() {
  return (
    <Icon>
      <Check />
      <Square />
    </Icon>
  );
}

const Icon = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: 32px;
`;

const Check = styled.div`
  position: relative;
  background: url(${confetiCheck}) center center no-repeat;
  background-size: cover;
  width: ${ICON_DIMENSION}px;
  height: ${ICON_DIMENSION}px;
  z-index: 1;
`;

const Square = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${confetiSquare}) center center no-repeat;
  background-size: 97% 97%;
  width: ${ICON_DIMENSION}px;
  height: ${ICON_DIMENSION}px;
  z-index: 0;
`;
