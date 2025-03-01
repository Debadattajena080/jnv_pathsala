import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 left-0 w-full z-50"
      style={{
        backgroundColor: "#eaf1f8",
        backgroundImage: `
        linear-gradient(rgba(0, 0, 255, 0.1) 1px, transparent 2px),
        linear-gradient(90deg, rgba(0, 0, 255, 0.1) 1px, transparent 2px)
      `,
        backgroundSize: "40px 40px",
      }}
    >
      <nav className="w-full py-3 border-b-2 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="text-4xl font-extrabold text-transparent bg-clip-text">
            <img src={logo} alt="" className="w-16 h-auto" />
          </div>
          <div className="hidden md:flex space-x-6 text-xl font-bold">
            <Link
              to="/"
              className="relative group  transition-all duration-300 hover:text-purple-400"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-purple-400 transition-all duration-300 rounded-full group-hover:w-full"></span>
            </Link>
            <Link
              to="/notice_board"
              className="relative group transition-all duration-300 hover:text-purple-400"
            >
              Notice Board
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-purple-400 transition-all duration-300 rounded-full group-hover:w-full"></span>
            </Link>
            <Link
              to="/signin"
              className="relative group transition-all duration-300 hover:text-purple-400"
            >
              Sign In
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-purple-400 transition-all duration-300 rounded-full group-hover:w-full"></span>
            </Link>
            <Link
              to="/signup"
              className="relative group transition-all duration-300 hover:text-purple-400"
            >
              Sign Up
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-purple-400 transition-all duration-300 rounded-full group-hover:w-full"></span>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 right-0 w-64 h-full bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-6 flex flex-col items-center space-y-6 text-xl rounded-l-xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white"
            >
              <X size={32} />
            </button>
            <a href="#" className="hover:text-purple-400">
              Home
            </a>
            <a href="#" className="hover:text-purple-400">
              About
            </a>
            <a href="#" className="hover:text-purple-400">
              Services
            </a>
            <a href="#" className="hover:text-purple-400">
              Contact
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
