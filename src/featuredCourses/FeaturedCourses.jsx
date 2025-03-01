  import React from "react";
  import finance from "../assets/finance.jpg"
  import chemistry from "../assets/chemistry.jpg"
  import maths from "../assets/maths.jpg"

  const courses = [
    {
      category: "Class 12 • Mathematics",
      title: "Calculus Mastery",
      description: "Learn the fundamentals and advanced techniques of calculus.",
      mentor: "Dr. Alan Thompson",
      mentorImage: "https://via.placeholder.com/50",
      courseImage: maths, // Replace with real image
      rating: "4.8",
    },
    {
      category: "Class 11 • Chemistry",
      title: "Organic Chemistry Essentials",
      description:
        "Explore the core concepts of organic chemistry with practical applications.",
      mentor: "Prof. Sarah Carter",
      mentorImage: "https://via.placeholder.com/50",
      courseImage: chemistry, // Replace with real image
      rating: "4.7",
    },
    {
      category: "Class 12 • Commerce",
      title: "Financial Accounting Basics",
      description: "Master the principles of financial accounting and reporting.",
      mentor: "Mr. Robert Williams",
      mentorImage: "https://via.placeholder.com/50",
      courseImage: finance, // Replace with real image
      rating: "4.6",
    },
  ];

  const FeaturedCourses = () => {
    return (
      <div className="pb-10 text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Popular Among Students
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 mt-12 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div
            key={index}
            className="bg-white text-left shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow h-[500px] flex flex-col"
          >
            {/* Course Image */}
            <img
              src={course.courseImage}
              alt={course.title}
              className="w-full h-56 object-cover p-2 "
            />
          
            {/* Course Content */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-gray-500">{course.category}</p>
              <h2 className="text-xl font-semibold mt-1">{course.title}</h2>
              <p className="text-gray-600 mt-2 flex-grow">{course.description}</p>
          
              {/* Mentor Info */}
              <div className="flex items-center mt-4">
                <img
                  src={course.mentorImage}
                  alt={course.mentor}
                  className="w-10 h-10 border-2 border-blue-500 rounded-full mr-3"
                />
                <div>
                  <p className="text-gray-900 font-medium">{course.mentor}</p>
                  <p className="text-yellow-500 font-bold">⭐ {course.rating}</p>
                </div>
              </div>
          
              {/* Enroll Button */}
              <button className="bg-blue-600 text-white w-full mt-3 py-2 text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
                Enroll Now
              </button>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    );
  };

  export default FeaturedCourses;
