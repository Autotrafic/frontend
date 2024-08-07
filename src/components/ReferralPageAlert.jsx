import styled from "styled-components";

export default function ReferralPageAlert({ isReferralValid }) {
  return (
    <>
      {isReferralValid ? (
        <ReferralMessageContainer $isReferralValid={isReferralValid}>
          <ReferralMessageText>
            ¡Tienes <ImportantText>10€ de descuento</ImportantText> por venir de HistorialVehículo!
          </ReferralMessageText>
        </ReferralMessageContainer>
      ) : null}
    </>
  );
}

const ReferralMessageContainer = styled.div`
  margin-top: ${({ $isReferralValid }) => ($isReferralValid ? "60px" : "0")};
  display: flex;
  justify-content: center;
  padding: 0.6em 0.3em;
  width: 100%;
  background-color: #fae7c8;
  border-bottom: 2px solid #f78c00;
`;

const ImportantText = styled.span`
  font-weight: 700;
  font-size: 13px;
`;

const ReferralMessageText = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #f78c00;
  text-align: center;
`;
