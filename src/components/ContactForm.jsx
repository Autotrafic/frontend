import styled from "styled-components";
import { colors } from "../utils/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faComments } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import LegalCheckbox from "./reusable/LegalCheckbox";

const columnWidth = "480px";

const bigPhoneScreenMedia = "476px";

export default function ContactForm() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
    padding: 60px 0 100px 0;

    @media (max-width: ${bigPhoneScreenMedia}) {
      padding: 30px 20px;
      gap: 25px;
    }
  `;
  const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `;
  const Title = styled.h2`
    font-weight: 600;
    margin: 0;
  `;

  const Line = styled.div`
    width: 60%;
    height: 3px;
    background-color: ${colors.primaryColor};
    border-radius: 5px;
  `;

  const ContactContainer = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      flex-direction: column;
      align-items: center;
    }
  `;

  const RightContactFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${columnWidth};

    @media (max-width: ${bigPhoneScreenMedia}) {
      width: 320px;
      gap: 10px;
    }
  `;

  const SubContactContainer = styled.div`
    display: flex;
    gap: 50px;
    padding: 40px;
    justify-items: center;
    align-items: center;
    height: 49%;
    width: 100%;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    border-radius: 10px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      gap: 20px;
      padding: 10px;
      height: 140px;
    }
  `;

  const SubContactContainerIndividual = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    &:hover {
      cursor: pointer;
    }

    @media (max-width: ${bigPhoneScreenMedia}) {
      gap: 8px;
    }
  `;

  const ContactIcon = styled(FontAwesomeIcon)`
    color: ${colors.primaryColor};
    width: 40px;
    height: 40px;
    margin-bottom: 15px;
    transition: 0.1s;
    &:hover {
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
  const ContactTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin: 0;

    @media (max-width: ${bigPhoneScreenMedia}) {
      font-size: 14px;
    }
  `;
  const ContactText = styled.p`
    font-size: 18px;
    color: ${colors.primaryGrey};
    margin: 0;
    transition: 0.1s;
    text-decoration: none;
    &:hover {
      font-weight: bold;
      color: ${colors.primaryColor};
      transition: 0.3s;
    }

    @media (max-width: ${bigPhoneScreenMedia}) {
      font-size: 14px;
      font-weight: bold;
    }
  `;

  const SocialMediaIcons = styled.div`
    display: flex;
    gap: 20px;
  `;

  const WhatsappIcon = styled(FontAwesomeIcon)`
    color: #25d366;
    width: 50px;
    height: 50px;
    transition: 0.1s;
    &:hover {
      width: 60px;
      height: 60px;
      transition: 0.2s;
    }

    @media (max-width: ${bigPhoneScreenMedia}) {
      width: 45px;
      height: 45px;
    }
  `;

  const InstagramIcon = styled(FontAwesomeIcon)`
  color: #CB3CC0
  width: 50px;
  height: 50px;
  transition: 0.1s;
  &:hover {
    width: 60px;
    height: 60px;
    transition: 0.2s;
  }
  
  @media (max-width: ${bigPhoneScreenMedia}) {
    width: 45px;
      height: 45px;
  }`;

  const LeftContactFormContainer = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    height: 100%;
    padding: 25px 52px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    width: ${columnWidth};

    @media (max-width: ${bigPhoneScreenMedia}) {
      width: 320px;
      padding: 25px 15px;
    }
  `;

  const ContactFormTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    align-self: center;
  `;

  const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const FirstInputsContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const FormInputSmall = styled.input`
    width: 48%;
    border-radius: 5px;
    border: 1px solid ${colors.primaryColor};
    padding: 10px;

    @media (max-width: ${bigPhoneScreenMedia}) {
      height: 32px;
    }
  `;

  const FormInputSubject = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${colors.primaryColor};

    @media (max-width: ${bigPhoneScreenMedia}) {
      height: 32px;
    }
  `;

  const FormInputDescription = styled.input`
    width: 100%;
    padding: 10px;
    height: 120px;
    border-radius: 5px;
    border: 1px solid ${colors.primaryColor};

    @media (max-width: ${bigPhoneScreenMedia}) {
      height: 80px;
    }
  `;

  const SubmitContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;

  const SubmitButton = styled.button`
    background-color: ${colors.primaryColor};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 25px;
    &:hover {
      background-color: #4f74ff;
      cursor: pointer;
    }
  `;

  return (
    <Container>
      <TitleContainer>
        <Title>Contacto</Title>
        <Line />
      </TitleContainer>
      <ContactContainer>
        <LeftContactFormContainer>
          <ContactFormTitle>Habla con nosotros</ContactFormTitle>
          <InputsContainer>
            <FirstInputsContainer>
              <FormInputSmall placeholder="Nombre" />
              <FormInputSmall placeholder="Correo electrónico" />
            </FirstInputsContainer>
            <FormInputSubject placeholder="Asunto" />
            <FormInputDescription placeholder="Mensaje" />
          </InputsContainer>
          <SubmitContainer>
            <LegalCheckbox size={"20px"} />
            <SubmitButton type="submit">Enviar</SubmitButton>
          </SubmitContainer>
        </LeftContactFormContainer>

        <RightContactFormContainer>
          <SubContactContainer>
            <SubContactContainerIndividual>
              <a href="mailto:contacto@autotrafic.es">
                <ContactIcon icon={faEnvelope} />
              </a>

              <ContactTitle>Correo electrónico</ContactTitle>
              <a href="mailto:contacto@autotrafic.es" style={{ textDecoration: "none" }}>
                <ContactText>contacto@autotrafic.es</ContactText>
              </a>
            </SubContactContainerIndividual>
            <SubContactContainerIndividual>
              <a href="callto:+34674219155">
                <ContactIcon icon={faPhone} />
              </a>

              <ContactTitle>Teléfono</ContactTitle>
              <a href="callto:+34674219155" style={{ textDecoration: "none" }}>
                <ContactText>643 21 92 97</ContactText>
              </a>
            </SubContactContainerIndividual>
          </SubContactContainer>

          <SubContactContainer>
            <SubContactContainerIndividual>
              <ContactIcon icon={faComments} />
              <ContactTitle>Redes sociales</ContactTitle>
              <SocialMediaIcons>
                <a href="https://wa.me/643219297" target="_blank">
                  <WhatsappIcon icon={faSquareWhatsapp} />
                </a>
                <a href="https://www.instagram.com/autotrafic.gestoria/" target="_blank">
                  <InstagramIcon
                    icon={faSquareInstagram}
                    style={{
                      color: "#CB3CC0",
                    }}
                  />
                </a>
              </SocialMediaIcons>
            </SubContactContainerIndividual>
          </SubContactContainer>
        </RightContactFormContainer>
      </ContactContainer>
    </Container>
  );
}
