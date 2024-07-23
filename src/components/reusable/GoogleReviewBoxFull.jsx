import styled from "styled-components";
import { colors } from "../../utils/styles";
import { GoogleLogo, GoogleStar } from "./SVGs";

const starsNumber = [1, 2, 3, 4, 5];

export default function GoogleReviewBoxFull({ boxData }) {
  const {timestamp, customerPicture, customerName, reviewText} = boxData;

  return (
    <Container>
      <TimestampContainer>{timestamp}</TimestampContainer>
      <CustomerReview>
        <CustomerContent>
          <CustomerPicture src={customerPicture} />
          <CustomerInfo>
            {customerName}
            <GoogleStars>
              {starsNumber.map((_, i) => (
                <GoogleStar key={i} />
              ))}
            </GoogleStars>
          </CustomerInfo>
        </CustomerContent>
        {reviewText}
      </CustomerReview>
      <GoogleContent>
        <GoogleLogo />
        <GoogleTitle>
          <div>Reseña de</div>
          <div>Google</div>
        </GoogleTitle>
      </GoogleContent>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid ${colors.googleReviewGrey};
  min-width: 180px;
  border-radius: 15px;
  background-color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  height: 250px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.15);
`;

const TimestampContainer = styled.div`
  color: #616161;
  font-size: 11px;
  font-weight: 500;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CustomerReview = styled.div`
  color: rgb(52, 52, 52);
  font-size: 13px;
  font-style: italic;
  font-weight: 500;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 18px;
`;

const CustomerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 25px;
`;

const CustomerPicture = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 9999px;
`;

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
  color: rgb(52, 52, 52);
  font-size: 13.125px;
  font-weight: 600;
  font-style: normal;
  gap: 5px;
`;

const GoogleStars = styled.div`
  display: flex;
`;

const GoogleContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  align-items: center;
  color: inherit;
  margin-top: 20px;
`;

const GoogleTitle = styled.div`
  margin-left: 0.25rem;
`;
