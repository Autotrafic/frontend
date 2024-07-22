import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import Carousel from "react-multi-carousel";
import { googleReviews } from "../../../utils/data";
import GoogleReviewBoxFull from "../GoogleReviewBoxFull";
import Title from "../Title";

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
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="carousel-wrapper">
      <Title middleLine>Nuestros clientes satisfechos por el servicio que ofrecemos</Title>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        arrows={false}
        autoPlaySpeed={7000}
        containerClass="custom-carousel"
        dotListClass="custom-dot-list-style"
      >
        {googleReviews.map((review) => (
          <GoogleReviewBoxFull boxData={review} key={review.customerName} />
        ))}
      </Carousel>
      </div>
  );
}
