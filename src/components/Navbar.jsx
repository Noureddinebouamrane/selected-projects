// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="group relative">
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            STUDIO
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#showcase"
            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Showcase
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            About
          </a>
          <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105">
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
