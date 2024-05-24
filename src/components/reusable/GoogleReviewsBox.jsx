import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import googleLogo from "../../assets/google-logo.svg";

const ReviewsContainer = styled.div`
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: white;
  border-radius: 4px;

  @media (min-width: 100px) {
    gap: 4px;
    max-width: 150px;
  }
`;

const ReviewsText = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  color: #242424;
  font-size: ${({ $isMobile }) => ($isMobile ? "15px" : "15px")};
`;

const ReviewsStarsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const ReviewsStar = styled(FontAwesomeIcon)`
  width: ${({ $isMobile }) => ($isMobile ? "25px" : "20px")};
  height: ${({ $isMobile }) => ($isMobile ? "25px" : "20px")};
  color: #ffc106;
`;

export default function GoogleReviewsBox() {
  const isMobile = window.innerWidth < 1000;

  const starsArray = Array.from({ length: 5 }, (_, index) => ({ key: index }));

  return (
    <ReviewsContainer>
      <img
        src={googleLogo}
        alt=""
        style={{ width: isMobile ? "80px" : "82px" }}
      />
      <ReviewsStarsContainer>
        {starsArray.map((_, i) => (
          <ReviewsStar key={i} icon={faStar} $isMobile={isMobile} />
        ))}
      </ReviewsStarsContainer>
      <ReviewsText $isMobile={isMobile}>123 reseñas </ReviewsText>
    </ReviewsContainer>
  );
}
