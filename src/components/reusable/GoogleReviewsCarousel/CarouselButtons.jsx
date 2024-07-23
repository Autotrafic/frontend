import styled from "styled-components";
import { colors } from "../../../utils/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function CarouselButtons({ next, previous, goToSlide, ...rest }) {
  const { carouselState: { currentSlide } } = rest;

  return (
    <Container>
      <RelativeDiv>
        <ButtonsWrapper>
          <Button onClick={() => previous()}>
            <FontAwesomeIcon icon={faChevronLeft} size="xs" />
          </Button>
          <Button onClick={() => goToSlide(currentSlide + 1)}>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
          </Button>
        </ButtonsWrapper>
      </RelativeDiv>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 22px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0 5.1em;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 0;
  }
`;

const RelativeDiv = styled.div`
  width: 105px;
  position: relative;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  gap: 10px;
`;

const Button = styled.div`
  padding: 3px 20px;
  border: 0;
  background-color: ${colors.primaryColor};
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
