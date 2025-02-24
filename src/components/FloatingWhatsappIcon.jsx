import styled from 'styled-components';
import whatsappIcon from '../assets/whatsapp-icon-skeleton.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import whatsappDialogue from '../assets/vineta-whats.png';
import { logWhatsappClick } from '../services/logger';
import { onWhatsappClick } from '../utils/funcs';

const tabletScreenMedia = '1000px';
const bigPhoneScreenMedia = '476px';

export default function FloatingWhatsappIcon() {
  const screenWidth = window.innerWidth;

  const isMobile = screenWidth < 415 ? true : false;

  return (
    <>
      <WhatsappFloating>
        {isMobile ? (
          <img src={whatsappDialogue} alt="" width={220} height="50px" />
        ) : (
          <img src={whatsappDialogue} alt="" width={250} height="60px" />
        )}

        <WhatsappFloatingText>Respondemos al instante</WhatsappFloatingText>
      </WhatsappFloating>
      <a onClick={onWhatsappClick} style={{ textDecoration: 'none' }}>
        <WhatsappIconContainer>
          {isMobile ? <WhatsappIcon icon={faWhatsapp} /> : <WhatsappIcon icon={faWhatsapp} />}
        </WhatsappIconContainer>
      </a>
    </>
  );
}

const WhatsappFloating = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 43px;
  right: 110px;
  width: 250px; /* Asegúrate de que sea igual al ancho de la imagen */
  height: auto;
  @media (max-width: ${tabletScreenMedia}) {
    right: 60px;
  }
`;

const WhatsappFloatingText = styled.div`
  font-size: 14px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  white-space: nowrap;
  @media (max-width: ${tabletScreenMedia}) {
    font-size: 12px;
  }
`;

const WhatsappIconContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 35px;
  background-color: #25d366;
  border-radius: 50%;
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: 0.2s;

  &:hover {
    width: 95px;
    height: 95px;
    transition: 0.2s;
  }

  @media (max-width: ${tabletScreenMedia}) {
    width: 64px;
    height: 64px;
    right: 20px;
  }
  &:hover {
    width: 64px;
    height: 64px;
    transition: 0;
  }
`;

const WhatsappIcon = styled(FontAwesomeIcon)`
  color: white;
  width: 60px;
  height: 60px;

  @media (max-width: ${tabletScreenMedia}) {
    width: 50px;
    height: 50px;
  }
`;
