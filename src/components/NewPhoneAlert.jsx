// components/NewPhoneAlert.jsx
import { useState } from "react";
import styled from "styled-components";

export default function NewPhoneAlert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AlertWrapper>
      <AlertContainer>
        <Icon>📢</Icon>

        <TextContent>
          <Title>Nuevo número de WhatsApp</Title>

          <Message>
            Por problemas técnicos, nuestro nuevo número de WhatsApp es{" "}
            <PhoneLink href="https://wa.me/34614653426" target="_blank">
              +34 614 65 34 26
            </PhoneLink>
            . Disculpa las molestias.
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
  background: rgba(20, 20, 20, 0.92);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 1em 1.2em;
  display: flex;
  align-items: center;
  gap: 1em;
  pointer-events: all;

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
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
`;

const PhoneLink = styled.a`
  color: #4da6ff;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
  background: #e53935;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background: #c62828;
  }
`;