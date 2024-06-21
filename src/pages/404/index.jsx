import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/styles";
import notFoundAnimation from "../../assets/not-found-animation.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: notFoundAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function NotFoundPage() {
  return (
    <Container>
      <Content>
        <Lottie options={defaultOptions} width={300} />
        <ErrorText>¡Vaya!</ErrorText>
        <Message>No existe la página que estás buscando</Message>
        <HomeButton href="/">Volver al inicio</HomeButton>
      </Content>
    </Container>
  );
}

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const Container = styled.div`
padding-top: 5em;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #f0f0f0;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Content = styled.div`
  text-align: center;
`;

const ErrorText = styled.h1`
  font-size: 3rem;
  color: ${colors.primaryColor};
  margin: 0;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 1em;
`;

const HomeButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: ${colors.primaryColor};
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.secondaryColor};
  }
`;
