import styled from "styled-components";
import Title from "../../../components/reusable/Title";
import {
  sectionPadding,
  sectionBackgroundColor,
} from "../../../utils/constants";
import { colors } from "../../../utils/styles";
import CompanyAdvantageBox from "../../../components/reusable/CompanyAdvantageBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faCoins } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { logWhatsappClick } from "../../../services/logger";
import { onWhatsappClick } from "../../../utils/funcs";

const bigPhoneScreenMedia = "510px";
const screenWidth = window.innerWidth;
const isMobile = screenWidth < 510 ? true : false;

export default function ForCompaniesSection() {
  return (
    <Container id="professional-section">
      <Title middleLine>
        ¿Realizas muchas transferencias o eres profesional?
      </Title>
      <SubTitleText>
        Aprovecha nuestro <SubTitleTextBlue>servicio único</SubTitleTextBlue>{" "}
        con los <SubTitleTextBlue>precios más bajos</SubTitleTextBlue> del
        mercado
      </SubTitleText>
      <CompanyAdvantageBoxContainer>
        <CompanyAdvantageBox
          advantageTitle={"Tramitamos a velocidad récord"}
          advantageDescription={`Tenemos automatizado el sistema de tramitación gracias a nuestro software propio. \nEn apenas minutos tienes tus trámites realizados.`}
          icon={faClock}
          isSpacing={false}
        />
        <CompanyAdvantageBox
          advantageTitle={"Te asignamos un asistente personal"}
          advantageDescription={`Como parte de nuestro servicio exclusivo, a cada uno de nuestros clientes le asignamos un gestor para que esté asistido en todo momento.`}
          icon={faCircleUser}
          isSpacing={false}
        />
        <CompanyAdvantageBox
          advantageTitle={"Precios insuperables"}
          advantageDescription={`Nos gustan las relaciones a largo plazo, por eso adaptamos los precios a tus necesidades, buscando el beneficio mútuo en todo momento.`}
          icon={faCoins}
          isSpacing={true}
        />
      </CompanyAdvantageBoxContainer>
      <CompanyAdvantageCtaContainer>
        <CtaText>
          Para disfrutar de nuestro servicio y nuestras tarifas especiales
          <CtaTextBlue>
            {" "}
            contacta ahora con uno de nuestros agentes:
          </CtaTextBlue>
        </CtaText>
        <ContactButtonsContainer>
          <ContactLink
             onClick={onWhatsappClick}
            style={{ textDecoration: "none" }}
          >
            <ContactButtonWhatsapp>
              <ContactIcon icon={faWhatsapp} />
              <ContactButtonText>Whatsapp</ContactButtonText>
            </ContactButtonWhatsapp>
          </ContactLink>

          <ContactLink
            href="tel:+34643219297"
            style={{ textDecoration: "none" }}
          >
            <ContactButton>
              <ContactIcon icon={faPhone} />
              <ContactButtonText>+34 643219297</ContactButtonText>
            </ContactButton>
          </ContactLink>
        </ContactButtonsContainer>
      </CompanyAdvantageCtaContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 2.5em 2em 4em 2em;
  align-items: center;
  background-color: ${sectionBackgroundColor};

  @media (max-width: ${bigPhoneScreenMedia}) {
    padding: 2.5em 0.2em 4em 0.2em;
  }
`;

const SubTitleText = styled.p`
  font-size: 17px;
  text-align: center;
  display: inline;
`;

const SubTitleTextBlue = styled.p`
  font-size: 17px;
  text-align: center;
  color: ${colors.primaryColor};
  font-weight: 600;
  display: inline;
`;

const CompanyAdvantageBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const CompanyAdvantageCtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const CtaText = styled.div`
  font-size: 18px;
  text-align: center;
  display: inline;
`;
const CtaTextBlue = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${colors.primaryColor};
  display: inline;
`;

const ContactButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 50%;
`;

const ContactIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  padding-left: 10px;
  transition: 0.3s;
  color: white;
`;

const ContactLink = styled.a`
  flex: 1;
`;

const ContactButtonText = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 10px 10px;
  transition: 0.3s;
`;

const ContactButtonWhatsapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #03ce00;
  color: white;
  transition: 0.3s;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
  felx: 1;

  &:hover {
    cursor: pointer;
    border: none;
    border: 1px solid ${colors.primaryColor};
    transition: 0.3s;
    transform: translateY(5px);
    background-color: white;

    ${ContactIcon} {
      color: ${colors.primaryColor};
    }
    ${ContactButtonText} {
      color: ${colors.primaryColor};
    }
  }
`;

const ContactButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid ${colors.primaryColor};
  color: white;
  background-color: ${colors.primaryColor};
  transition: 0.3s;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
  flex: 1;

  &:hover {
    cursor: pointer;
    background-color: white;
    transition: 0.3s;
    transform: translateY(5px);

    ${ContactIcon} {
      color: ${colors.primaryColor};
    }
    ${ContactButtonText} {
      color: ${colors.primaryColor};
    }
  }
`;
