// pages/HomePage.jsx
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Sparkles, Zap, Shield, Globe } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
              <span className="text-xs font-mono text-blue-400">
                WELCOME TO MY PORTFOLIO
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">NOUREDDINE</span>
              <br />
              <span className="text-gradient-blue">L.BOUAMRANE</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Frontend Developer | Software Engineer | PhD Student in
              Information Systems and Software Engineering at USTHB
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-sm font-mono text-gradient-accent tracking-wider">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mt-2">
              Selected Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
