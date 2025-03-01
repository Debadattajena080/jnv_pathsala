import React from "react";
import Banner from "./landingSection/Banner";
import FeaturedCourses from "./featuredCourses/FeaturedCourses";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import Testimonials from "./testimonials/Testimonials";
import CarouselComponent from "./navbar/CarouselComponent";

const LandingPage = () => {
  return (
    <div>
      <CarouselComponent />

      <Banner />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
