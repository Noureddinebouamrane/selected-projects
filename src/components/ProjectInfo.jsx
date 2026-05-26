// components/ProjectInfo.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";

const ProjectInfo = ({ project, isActive }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={project.id}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          className="space-y-8"
        >
          {/* Category */}
          <motion.div variants={itemVariants}>
            <span className="text-sm font-mono text-gradient-accent tracking-wider">
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-gradient">{project.title}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg leading-relaxed"
          >
            {project.shortDescription}
          </motion.p>

          {/* Technologies */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:border-white/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Project Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <User className="w-4 h-4 text-blue-400" />
                <span>{project.details.client}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>{project.details.year}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{project.details.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="w-4 h-4 text-blue-400">✦</span>
                <span>{project.details.role}</span>
              </div>
            </div>
          </motion.div>

          {/* Read More Button */}
          <motion.div variants={itemVariants}>
            <Link
              to={`/project/${project.id}`}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <span className="font-medium text-lg">Read More</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectInfo;
