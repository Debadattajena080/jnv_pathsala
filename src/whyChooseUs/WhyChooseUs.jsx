import React from "react";
import {
  FaChalkboardTeacher,
  FaVideo,
  FaBook,
  FaQuestionCircle,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaChalkboardTeacher size={40} />, text: "Expert Mentors" },
  { icon: <FaVideo size={40} />, text: "Live Classes" },
  { icon: <FaBook size={40} />, text: "Study Materials" },
  { icon: <FaQuestionCircle size={40} />, text: "Doubt Solving" },
  { icon: <FaChartLine size={40} />, text: "Track Progress" },
  { icon: <FaUsers size={40} />, text: "Community" },
];

const WhyChooseUs = () => {
  return (
    <div className=" relative text-center  md:max-w-7xl mx-auto pb-12">
      {/* Background Grid */}
      <div className="absolute inset-0 w-full h-full"></div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-blue-600 mb-12 relative"
      >
        Why Choose Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:px-6 px-2 relative">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 md:p-4 rounded-2xl shadow-lg flex flex-col items-center space-y-4 md:max-w-md"
          >
            <div className="text-blue-500 bg-blue-100 p-4 rounded-full">
              {feature.icon}
            </div>
            <p className="text-xl font-semibold">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
