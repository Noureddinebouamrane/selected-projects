// components/Footer.jsx
import React from "react";
import { GitBranch, TextWrapIcon, Link2Icon, Mail } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import {
  BsChatFill,
  BsGithub,
  BsLinkedin,
  BsMailbox,
  BsMailbox2,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="  py-8 md:py-12 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              NOUREDDINE L.BOUAMRANE
            </span>
            <p className="text-gray-500 text-xs mt-1">All rights reserved.</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Noureddinebouamrane"
              target="_blank"
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              <BsGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/noureddine-bouamrane-7b48b5209/"
              target="_blank"
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              <BsLinkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:noureddinebouamrane@gmail.com"
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              <BsChatFill className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
