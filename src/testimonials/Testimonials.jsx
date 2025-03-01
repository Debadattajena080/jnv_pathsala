import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "John Doe",
    text: "This service exceeded my expectations. Highly recommended!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Jane Smith",
    text: "A truly wonderful experience. Will use again!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Robert Brown",
    text: "Fantastic quality and amazing support team!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Emily White",
    text: "The best decision I made. Top-notch service!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "John Doe",
    text: "This service exceeded my expectations. Highly recommended!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Jane Smith",
    text: "A truly wonderful experience. Will use again!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Robert Brown",
    text: "Fantastic quality and amazing support team!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Emily White",
    text: "The best decision I made. Top-notch service!",
    image: "https://via.placeholder.com/50",
  },
];

const Testimonials = () => {
  return (
    <div className="py-10">
      <h2 className="text-5xl font-bold text-blue-600 mb-12">
        Student Success Stories
      </h2>
      <Marquee pauseOnHover speed={50} gradient={true} gradientWidth={50}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mx-4 flex flex-col items-center space-x-4 w-80 "
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full border-2 border-blue-400"
            />
            <div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <h4 className="font-semibold text-gray-900 mt-2">
                - {testimonial.name}
              </h4>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
