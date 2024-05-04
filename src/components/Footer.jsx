import styled from "styled-components";
import { colors } from "../utils/styles";
import autotraficLogo from "../assets/logo-horizontal.png";
import colegioLogo from "../assets/colegio-logo.png";
import whatsappIcon from "../assets/whatsapp-icon.svg";

const tabletScreenMedia = "1000px";
const bigPhoneScreenMedia = "476px";

export default function Footer() {
  const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 100px;
    background-color: #232323;
    padding: 80px 100px;

    @media (max-width: ${tabletScreenMedia}) {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-wrap: wrap;
      gap: 60px;
      padding: 40px 20px;
      display: flex;
      width: 100%;
    }

    @media (max-width: ${bigPhoneScreenMedia}) {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-wrap: wrap;
      gap: 60px;
      padding: 40px 20px;
      display: flex;
      width: 100%;
    }
  `;

  const GridComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      gap: 10px;
    }
  `;

  const ContactTextGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;

  const ContactTitle = styled.p`
    color: #d8d8d8;
    margin: 0;

    @media (max-width: 475px) {
      font-size: 12px;
    }
  `;

  const ContactText = styled.p`
    color: white;
    font-weight: bold;
    margin: 0;
    text-decoration: none;
    transition: 0.1s;
    width: fit-content;
    &:hover {
      cursor: pointer;
      color: ${colors.primaryColor};
      transition: 0.2s;
    }

    @media (max-width: 475px) {
      font-size: 12px;
    }
  `;

  const GridTitle = styled.p`
    color: white;
    font-weight: bold;
    margin: 0;

    @media (max-width: 475px) {
      font-size: 12px;
    }
  `;

  const GridText = styled.p`
    color: #d8d8d8;
    margin: 0;
    transition: 0.1s;
    &:hover {
      cursor: pointer;
      color: ${colors.linkBlue};
      transition: 0.2s;
      text-decoration: underline;
    }
    @media (max-width: 475px) {
      font-size: 12px;
    }
  `;

  const AutotraficLogo = styled.img`
    width: 250px;
    border-radius: 10px;

    @media (max-width: 475px) {
      width: 150px;
      border-radius: 6px;
    }
  `;

  const WhatsappIcon = styled.img`
    width: 60px;
    border-radius: 5px;

    @media (max-width: ${tabletScreenMedia}) {
      width: 55px;
      border-radius: 4px;
    }


    @media (max-width: 475px) {
      width: 45px;
      border-radius: 2px;
    }
  `;

  const ColegioLogo = styled.img`
    width: 250px;
    border-radius: 5px;

    @media (max-width: 475px) {
      width: 150px;
      border-radius: 2px;
    }
  `;

  return (
    <FooterContainer>
      <GridComponent>
        <a href="https://autotrafic.es/" style={{ textDecoration: "none" }}>
          <AutotraficLogo src={autotraficLogo} alt="autotraficLogo" />
        </a>
        <ContactTextGroup>
          <ContactTitle>Teléfono</ContactTitle>
          <a href="callto:+34674219155" style={{ textDecoration: "none" }}>
            <ContactText>+34 643 21 92 97</ContactText>
          </a>
        </ContactTextGroup>
        <ContactTextGroup>
          <ContactTitle>Correo electrónico</ContactTitle>
          <a
            href="mailto:contacto@autotrafic.es"
            style={{ textDecoration: "none" }}
          >
            <ContactText>contacto@autotrafic.es</ContactText>
          </a>
        </ContactTextGroup>
      </GridComponent>
      <GridComponent>
        <GridTitle>Páginas</GridTitle>
        <a href="https://autotrafic.es/" style={{ textDecoration: "none" }}>
          <GridText>Home</GridText>
        </a>
        <a
          href="https://autotrafic.es/noticias/"
          style={{ textDecoration: "none" }}
        >
          <GridText>Noticias</GridText>
        </a>
        <a
          href="https://autotrafic.es/contacto/"
          style={{ textDecoration: "none" }}
        >
          <GridText>Contacto</GridText>
        </a>
        <a
          href="https://autotrafic.es/articulos/"
          style={{ textDecoration: "none" }}
        >
          <GridText>Artículos</GridText>
        </a>
      </GridComponent>
      <GridComponent>
        <GridTitle>Legal</GridTitle>
        <a
          href="https://autotrafic.es/aviso-legal/"
          style={{ textDecoration: "none" }}
        >
          <GridText>Aviso Legal</GridText>
        </a>
        <a
          href="https://autotrafic.es/politica-de-privacidad/"
          style={{ textDecoration: "none" }}
        >
          <GridText>Política de privacidad</GridText>
        </a>
        <a
          href="https://autotrafic.es/politica-de-cookies/"
          style={{ textDecoration: "none" }}
        >
          <GridText>Política de cookies</GridText>
        </a>
        <a
          href="https://autotrafic.es/terminos-generales/"
          style={{ textDecoration: "none" }}
        >
          <GridText>Términos generales</GridText>
        </a>
      </GridComponent>
      <GridComponent>
        <a href="https://wa.me/643219297" target="_blank">
          <WhatsappIcon src={whatsappIcon} alt="colegioLogo" />
        </a>

        <ColegioLogo src={colegioLogo} alt="colegioLogo" />
      </GridComponent>
    </FooterContainer>
  );
}
