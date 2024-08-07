import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { googleReviews } from "../../../utils/data";
import GoogleReviewBoxFull from "../GoogleReviewBoxFull";
import Title from "../Title";
import CarouselButtons from "./CarouselButtons";

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
      </div>
    </div>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
