// components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import DeviceMockup from "./DeviceMockup";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="glass-card rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Device Mockup Section */}
      <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50">
        {/* <DeviceMockup
          deviceType={project.deviceType}
          screenshot={project.mockupImage}
        /> */}
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-gradient-accent tracking-wider">
            {project.category}
          </span>
          <div className="flex gap-2">
            {project.technologies.slice(0, 2).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gradient">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <User className="w-3 h-3 text-blue-400" />
            <span>{project.details.client}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Calendar className="w-3 h-3 text-blue-400" />
            <span>{project.details.year}</span>
          </div>
        </div>

        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-sm"
        >
          <span>Explore Project</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
