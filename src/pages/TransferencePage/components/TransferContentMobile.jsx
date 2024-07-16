import styled from "styled-components";
import Title from "../../../components/reusable/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import GoogleReviewsBox from "../../../components/reusable/GoogleReviewsBox";
import dgtLogo from "../../../assets/dgt.svg";
import ministerioImg from "../../../assets/ministerio.svg";
import colegioImg from "../../../assets/colegio-simple-logo.png";

export default function TransferContentMobile() {
  return (
    <TransferContainer>
      <Title fontSize={"21px"}>
        Cambia de nombre tu vehículo online en menos de 5 minutos
      </Title>
      <TextWrapper>
        <SubTitle>
          Gestoría Online especializada en la Transferencia de Vehículos con la
          DGT
        </SubTitle>
        <ExplanationText>
          NOS ENCARGAMOS DE TODO - MEJOR PRECIO GARANTIZADO
        </ExplanationText>
      </TextWrapper>

      <BoxesContainer>
        <img
          src={colegioImg}
          alt=""
          width={125}
          style={{ borderRadius: "2px" }}
        />
        <img src={dgtLogo} alt="" width={60} />
        <img
          src={ministerioImg}
          alt=""
          width={90}
          style={{ borderRadius: "2px" }}
        />
      </BoxesContainer>

      <WhatsContactContainer>
        <WhatsText>Te guiamos por Whatsapp en todo el proceso</WhatsText>
        <a
          href="https://wa.me/643219297"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <WhatsLink>
            <WhatsIcon icon={faWhatsapp} size="xl" />
            Habla con un gestor ahora
          </WhatsLink>
        </a>
        <WhatsText>Respondemos al instante</WhatsText>
      </WhatsContactContainer>

      <GoogleReviewsBox />
    </TransferContainer>
  );
}

const WhatsIcon = styled(FontAwesomeIcon)``;

const TransferContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  margin-bottom: 2em;
`;

const SubTitle = styled.p`
  font-size: 15px;
  color: #313131;
  margin: 0;
  font-weight: 600;
  text-align: center;
`;

const ExplanationText = styled.p`
  font-size: 13px;
  margin: 0;
  line-height: 22px;
  text-align: center;
`;

const BoxesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const WhatsContactContainer = styled.div`
  margin: 0;
`;

const WhatsText = styled.p`
  text-align: center;
  font-size: 15px;
`;

const WhatsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  border-radius: 6px;
  background-color: #51ca50;
  color: white;
  margin: 0.5rem 0;
  padding: 0.5rem 1.5rem;
  font-size: 18px;
  width: -moz-fit-content;
  width: 100%;
  font-weight: 600;
  text-decoration: inherit;
  border: none;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
