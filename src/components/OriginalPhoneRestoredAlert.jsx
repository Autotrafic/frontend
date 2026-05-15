// components/OriginalPhoneRestoredAlert.jsx
import { useState } from "react";
import styled from "styled-components";

export default function OriginalPhoneRestoredAlert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AlertWrapper>
      <AlertContainer>
        <Icon>✅</Icon>

        <TextContent>
          <Title>Número original restablecido</Title>

          <Message>
            Ya hemos restablecido nuestro número original de WhatsApp. 
            Volvemos a la normalidad 😊 Gracias por vuestra paciencia.
            Puedes contactarnos de nuevo en{" "}
            <PhoneLink href="https://wa.me/34643219297" target="_blank">
              +34 643 21 92 97
            </PhoneLink>
          </Message>
        </TextContent>

        <CloseButton onClick={() => setIsVisible(false)}>✕</CloseButton>
      </AlertContainer>
    </AlertWrapper>
  );
}

const AlertWrapper = styled.div`
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  pointer-events: none;
`;

const AlertContainer = styled.div`
  width: calc(100% - 2em);
  max-width: 950px;
  background: linear-gradient(
    135deg,
    rgba(15, 76, 129, 0.96),
    rgba(23, 120, 187, 0.96)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 10px 35px rgba(0, 72, 140, 0.35);
  border-radius: 18px;
  padding: 1em 1.2em;
  display: flex;
  align-items: center;
  gap: 1em;
  pointer-events: all;
  position: relative;

  @media (max-width: 700px) {
    align-items: flex-start;
    padding-right: 3.5em;
  }
`;

const Icon = styled.div`
  font-size: 28px;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.p`
  margin: 0 0 0.2em;
  color: white;
  font-size: 18px;
  font-weight: 800;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Message = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.92);
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
`;

const PhoneLink = styled.a`
  color: #ffffff;
  font-weight: 800;
  text-decoration: underline;

  &:hover {
    opacity: 0.9;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.28);
  }
`;