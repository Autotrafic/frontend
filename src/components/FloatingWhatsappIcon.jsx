import styled from "styled-components";
import whatsappIcon from "../assets/whatsapp-icon-skeleton.svg";

const tabletScreenMedia = "1000px";
const bigPhoneScreenMedia = "476px";

export default function FloatingWhatsappIcon() {
  const screenWidth = window.innerWidth;

  const isMobile = screenWidth < 415 ? true : false;

  return (
    <a href="https://wa.me/34643219297" target="_blank" style={{ textDecoration: "none" }}>
      <WhatsappIconContainer>
        {isMobile ? (
          <img src={whatsappIcon} alt="" width={60} />
        ) : (
          <img src={whatsappIcon} alt="" width={80} />
        )}
      </WhatsappIconContainer>
    </a>
  );
}

const WhatsappIconContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 35px;
  background-color: white;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: 0.2s;

  &:hover {
    width: 100px;
    height: 100px;
    transition: 0.2s;
  }

  @media (max-width: ${tabletScreenMedia}) {
    width: 70px;
    height: 70px;
  }
`;
