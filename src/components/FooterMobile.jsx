import styled from 'styled-components';
import { colors } from '../utils/styles';
import autotraficLogo from '../components/Navbar/logo/logo.svg';
import colegioLogo from '../assets/colegio-logo.png';
import whatsappIcon from '../assets/whatsapp-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleReviewsBox from './reusable/GoogleReviewsBox';
import dgtLogo from '../assets/dgt.svg';
import ministerioImg from '../assets/ministerio.svg';
import { onWhatsappClick } from '../utils/funcs';
import { Link } from 'react-router-dom';

const tabletScreenMedia = '1000px';
const bigPhoneScreenMedia = '476px';

export default function FooterMobile() {
  return (
    <FooterContainer>
      <a href="https://autotrafic.es/" style={{ textDecoration: 'none' }}>
        <AutotraficLogo src={autotraficLogo} alt="autotraficLogo" />
      </a>
      <SubContainer>
        <SubContainerGroup>
          <GridTitle>Contacto</GridTitle>
          <ContactTextGroup>
            <a href="tel:+34643219297" style={{ textDecoration: 'none' }}>
              <ContactText>+34 643 21 92 97</ContactText>
            </a>
          </ContactTextGroup>
          <ContactTextGroup>
            <a href="mailto:contacto@autotrafic.es" style={{ textDecoration: 'none' }}>
              <ContactText>contacto@autotrafic.es</ContactText>
            </a>
          </ContactTextGroup>
          <WhatsappContainer>
            <a onClick={onWhatsappClick}>
              <WhatsappIcon src={whatsappIcon} alt="colegioLogo" />
            </a>
            <a onClick={onWhatsappClick} style={{ textDecoration: 'none' }}>
              <GridText>¡Escríbenos!</GridText>
            </a>
          </WhatsappContainer>
        </SubContainerGroup>
        <SubContainerGroup>
          <GridTitle>Legal</GridTitle>
          <Link to="/aviso-legal" style={{ textDecoration: 'none' }}>
            <GridText>Aviso Legal</GridText>
          </Link>
          <Link to="/condiciones" style={{ textDecoration: 'none' }}>
            <GridText>Términos generales</GridText>
          </Link>
        </SubContainerGroup>
      </SubContainer>
      <SubContainerGroup>
        <IconsContainer>
          <IconsGroupContainer>
            <GoogleReviewsBox />
            <DgtLogoBackground>
              <img src={dgtLogo} alt="" height={50} />
            </DgtLogoBackground>
          </IconsGroupContainer>
          <IconsGroupContainer>
            <ColegioLogo src={colegioLogo} alt="colegioLogo" />
            <img src={ministerioImg} alt="" height={65} />
          </IconsGroupContainer>
        </IconsContainer>
      </SubContainerGroup>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 40px 20px;
  display: flex;
  width: 100%;

  @media (max-width: ${tabletScreenMedia}) {
  }

  @media (max-width: ${bigPhoneScreenMedia}) {
  }
`;

const SubContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

const SubContainerGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: ${bigPhoneScreenMedia}) {
    gap: 10px;
  }
`;

const ContactTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const ContactTitle = styled.p`
  margin: 0;

  @media (max-width: 475px) {
    font-size: 12px;
  }
`;

const ContactText = styled.p`
  color: #232323;
  font-size: 18px;
  margin: 0;
  text-decoration: none;
  transition: 0.1s;
  width: fit-content;
  margin-bottom: 10px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    color: ${colors.primaryColor};
    transition: 0.2s;
  }

  @media (max-width: ${bigPhoneScreenMedia}) {
    margin-bottom: 0;
    font-size: 15px;
  }
`;

const GridTitle = styled.p`
  font-weight: bold;
  margin: 0;

  @media (max-width: 475px) {
    font-size: 16px;
  }
`;

const GridText = styled.p`
  color: #232323;
  margin: 0;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    color: ${colors.linkBlue};
    transition: 0.2s;
    text-decoration: underline;
  }
  @media (max-width: 475px) {
    font-size: 13px;
  }
`;

const AutotraficLogo = styled.img`
  width: 250px;
  border-radius: 10px;

  @media (max-width: 475px) {
    width: 200px;
    border-radius: 6px;
  }
`;

const WhatsappIcon = styled.img`
  width: 50px;
  border-radius: 5px;

  @media (max-width: ${tabletScreenMedia}) {
    width: 55px;
    border-radius: 4px;
  }

  @media (max-width: ${bigPhoneScreenMedia}) {
    width: 35px;
    border-radius: 2px;
  }
`;

const ColegioLogo = styled.img`
  width: 160px;
  border-radius: 5px;

  @media (max-width: 475px) {
    width: 150px;
    border-radius: 2px;
  }
`;

const DgtLogoBackground = styled.div`
  width: 120px;
  height: 65px;
  background-color: white;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactIcon = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  transition: 0.1s;
  color: ${colors.primaryColor};
  &:hover {
    color: #3581ff;
    width: 45px;
    height: 45px;
    transition: 0.2s;
  }

  @media (max-width: ${bigPhoneScreenMedia}) {
    width: 35px;
    height: 35px;
    margin-bottom: 0;
  }
`;

const WhatsappContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const IconsGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
