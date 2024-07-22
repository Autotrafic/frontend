import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import { useRef } from "react";
import { googleReviews } from "../../../utils/data";
import GoogleReviewBoxFull from "../GoogleReviewBoxFull";
import Title from "../Title";

export default function GoogleReviewsCarousel() {
  const carouselRef = useRef();

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

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <>
     <div className="carousel-wrapper">
      <Title middleLine>Nuestros clientes agradecidos por un buen servicio</Title>
      <Carousel
        responsive={responsive}
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
      >
        {googleReviews.map((review) => (
          <GoogleReviewBoxFull boxData={review} key={review.customerName} />
        ))}
      </Carousel>
       {/* <ButtonWrapper>
         <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </ButtonWrapper> */}
      </div>
      </>
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
