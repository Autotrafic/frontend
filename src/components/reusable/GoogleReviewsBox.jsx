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
  padding: 15px 15px;

  @media (min-width: 100px) {
    gap: 4px;
    padding: 8px 0;
    max-width: 150px;
  }
`;

const ReviewsText = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  color: #242424;

  @media (min-width: 100px) {
    font-size: 13px;
  }
`;

const ReviewsStarsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const ReviewsStar = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: #ffc106;
`;

export default function GoogleReviewsBox() {
  const isMobile = window.innerWidth < 1000;

  const starsArray = Array.from({ length: 5 }, (_, index) => ({ key: index }));

  return (
    <ReviewsContainer>
      <img src={googleLogo} alt="" style={{ width: isMobile ? "60px" : "82px" }} />
      <ReviewsText $isMobile={isMobile}>123 reseñas </ReviewsText>
      <ReviewsStarsContainer>
        {starsArray.map((_, i) => (
          <ReviewsStar key={i} icon={faStar} size={isMobile && "2xs"} />
        ))}
      </ReviewsStarsContainer>
    </ReviewsContainer>
  );
}
