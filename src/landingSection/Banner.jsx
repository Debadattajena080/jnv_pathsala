import React from "react";
import { motion } from "framer-motion";
import mentorship from "../assets/mentorship.webp"
import studyMaterial from "../assets/study3.webp"
import community from "../assets/community.webp"

const sections = [
  {
    title: "Mentorship",
    text: "Gain access to exclusive mentorship programs designed to elevate your learning experience. Engage with experienced professionals and get personalized guidance.",
    image: mentorship,
  },
  {
    title: "Study Materials",
    text: "Access well-curated study materials tailored to help you grasp concepts better and accelerate your learning journey.",
    image: studyMaterial,
  },
  {
    title: "Community Support",
    text: "Join a thriving community of learners who support and uplift each other. Participate in discussions, seek help, and share knowledge.",
    image: community,
  },
];

const fadeInVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-2 space-y-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-bold text-blue-600 text-center"
      >
        Transform Your Learning Journey
      </motion.h1>

      {/* Sections */}
      <div className="flex flex-col  w-full max-w-5xl ">
        {sections.map(({ title, text, image }, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center md:gap-14 gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index % 2 === 0 ? "left" : "right"}
            variants={fadeInVariants}
          >
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
              <p className="text-lg text-gray-600">{text}</p>
            </div>
            
            {/* Image Section */}
            <motion.img
              src={image}
              alt={title}
              className="md:w-1/2 rounded-xl"
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
