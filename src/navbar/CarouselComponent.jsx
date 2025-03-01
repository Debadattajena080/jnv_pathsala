import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import first_image from "../assets/image1.jpg";
import second_image from "../assets/image2.jpg";
import third_image from "../assets/image3.jpg";

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="w-full"
    >
      <div>
        <img
          src={first_image}
          alt="Slide 1"
          className="object-cover h-[600px] w-full"
        />
      </div>
      <div>
        <img
          src={second_image}
          alt="Slide 2"
          className="object-cover h-[600px] w-full"
        />
      </div>
      <div>
        <img
          src={third_image}
          alt="Slide 3"
          className="object-cover h-[600px] w-full"
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
