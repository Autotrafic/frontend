import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { googleReviews } from "../../../utils/data";
import GoogleReviewBoxFull from "../GoogleReviewBoxFull";
import Title from "../Title";
import CarouselButtons from "./CarouselButtons";
import { ABOUT_US_ID } from "../../../utils/constants";

export default function GoogleReviewsCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 250 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Title middleLine>La satisfacción de nuestros clientes nos avala</Title>

        <Carousel
          responsive={responsive}
          pauseOnHover
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          arrows={false}
          autoPlaySpeed={5000}
          containerClass="custom-carousel"
          dotListClass="custom-dot-list-style"
          renderButtonGroupOutside
          customButtonGroup={<CarouselButtons />}
        >
          {googleReviews.map((review) => (
            <GoogleReviewBoxFull boxData={review} key={review.customerName} />
          ))}
        </Carousel>

        <AboutSection>
          <AboutTitle id={ABOUT_US_ID}>Quiénes somos</AboutTitle>

          <AboutText>
            <strong>Autotrafic</strong> es una gestoría online especializada
            exclusivamente en <strong>transferencias de vehículos</strong>,
            fundada en <strong>2023 en Vilanova i la Geltrú</strong>. Desde
            entonces hemos gestionado <strong>más de 3.000 trámites</strong> de
            cambio de titularidad en toda España.
          </AboutText>

          <ProfessionalCard>
            <ProfessionalName>
              <strong>Ovidiu Sebastian Ilie</strong>
            </ProfessionalName>
            <ProfessionalInfo>
              <em>
                Gestor Administrativo Colegiado nº 3966 · Colegio de Gestores
                Administrativos de Catalunya
              </em>
            </ProfessionalInfo>
          </ProfessionalCard>

          <AboutText>
            Gestor administrativo colegiado con especialización en{" "}
            <strong>trámites de tráfico y DGT</strong>. La colegiación garantiza
            que cada transferencia cumple con todos los{" "}
            <strong>requisitos legales vigentes</strong> y que el trámite está
            respaldado por un <strong>profesional regulado</strong>, no una
            plataforma anónima.
          </AboutText>

          <Quote>
            “Creé <strong>Autotrafic</strong> para que cambiar el nombre de un
            vehículo fuera tan sencillo como hacer una compra online.{" "}
            <em>Sin colas, sin papeleos, sin sorpresas en el precio.</em>”
          </Quote>
        </AboutSection>
      </div>
    </div>
  );
}

const AboutSection = styled.section`
  margin-top: 2rem;
  padding: 1.5rem 1rem 0.5rem;
  color: #1f1f1f;
`;

const AboutTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: #111;
`;

const AboutText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  color: #333;
  text-align: center;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
`;

const ProfessionalCard = styled.div`
  max-width: 650px;
  margin: 1rem auto;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-left: 3px solid #007bff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const ProfessionalName = styled.p`
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
  color: #111;
`;

const ProfessionalInfo = styled.p`
  font-size: 0.8rem;
  color: #555;
  margin: 0;
`;

const Quote = styled.blockquote`
  max-width: 750px;
  margin: 1.2rem auto 0;
  padding: 0.9rem 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
  font-style: italic;
  text-align: center;
  color: #1f1f1f;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;