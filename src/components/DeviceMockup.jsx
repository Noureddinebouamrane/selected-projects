// components/DeviceMockup.jsx
import React from "react";
import { motion } from "framer-motion";

const DeviceMockup = ({ deviceType, screenshot }) => {
  const mockups = {
    laptop: {
      width: "w-full max-w-[800px]",
      aspect: "aspect-[16/10]",
      bezel: "rounded-xl",
      screen: "rounded-lg",
    },
    phone: {
      width: "w-full max-w-[280px]",
      aspect: "aspect-[9/19]",
      bezel: "rounded-[2.5rem]",
      screen: "rounded-[2rem]",
    },
    tablet: {
      width: "w-full max-w-[500px]",
      aspect: "aspect-[4/3]",
      bezel: "rounded-2xl",
      screen: "rounded-xl",
    },
  };

  const config = mockups[deviceType];

  return (
    <motion.div
      className={`${config.width} ${config.aspect} mx-auto`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div
        className={`relative w-full h-full ${config.bezel} bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-2xl overflow-hidden`}
      >
        <div
          className={`absolute inset-[4px] ${config.screen} overflow-hidden bg-black`}
        >
          <img
            src={screenshot}
            alt="Project screenshot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default DeviceMockup;
