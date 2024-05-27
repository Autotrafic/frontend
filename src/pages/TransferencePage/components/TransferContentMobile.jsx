import styled from "styled-components";
import Title from "../../../components/reusable/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import GoogleReviewsBox from "../../../components/reusable/GoogleReviewsBox";
import dgtLogo from "../../../assets/dgt.svg";
import ministerioImg from "../../../assets/ministerio.svg";
import colegioImg from "../../../assets/colegio-simple-logo.png";
import { colors } from "../../../utils/styles";

const TransferContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
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
  gap: 30px;
`;

const WhatsContactContainer = styled.div`
  margin: 0;
`;

const WhatsText = styled.p`
  margin-top: 5px;
  text-align: center;
  font-size: 13px;
`;

const WhatsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  border-radius: 6px;
  background-color: #51ca50;
  color: white;
  padding: 0.3rem 1rem;
  width: -moz-fit-content;
  width: 100%;
  font-weight: 600;
  text-decoration: inherit;
  border: none;
`;

const WhatsIcon = styled(FontAwesomeIcon)``;

export default function TransferContentMobile() {
  return (
    <>
      <TransferContainer>
        <Title fontSize={"21px"}>
          Cambia de nombre tu vehículo online en menos de 5 minutos
        </Title>
        <SubTitle>
          Gestoría Online especializada en la Transferencia de Vehículos con la
          DGT
        </SubTitle>
        <ExplanationText>
          NOS ENCARGAMOS DE TODO - MEJOR PRECIO GARANTIZADO
        </ExplanationText>

        <BoxesContainer>
          <img
            src={colegioImg}
            alt=""
            width={80}
            style={{ borderRadius: "2px" }}
          />
          <img src={dgtLogo} alt="" width={53} />
          <img
            src={ministerioImg}
            alt=""
            width={77}
            style={{ borderRadius: "2px" }}
          />
        </BoxesContainer>

        <WhatsContactContainer>
          <a
            href="https://wa.me/643219297"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <WhatsLink>
              <WhatsIcon icon={faWhatsapp} size="lg" />
              Habla con un gestor ahora
            </WhatsLink>
          </a>
          <WhatsText>Respondemos al instante</WhatsText>
        </WhatsContactContainer>

        <GoogleReviewsBox />
      </TransferContainer>
    </>
  );
}
