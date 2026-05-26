// pages/ProjectDetailPage.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  Check,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import DeviceMockup from "../components/DeviceMockup";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black pt-6 pb-20"
    >
      {/* Hero Section with Mockup */}
      <div className="relative min-h-[70vh] flex items-center justify-center mb-16 px-6">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>

          <div className="mb-8">
            <DeviceMockup
              deviceType={project.deviceType}
              screenshot={project.mockupImage}
            />
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="text-sm font-mono text-gradient-accent mb-3 block">
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                Overview
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                Challenge
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Creating a seamless experience that balances performance with
                aesthetic excellence while maintaining enterprise-grade security
                and scalability.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                Solution
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Leveraged cutting-edge technologies and modern architecture
                patterns to deliver a robust, scalable solution that exceeds
                client expectations.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-6 h-fit">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Project Details
              </h3>
              <div className="space-y-2">
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
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:sm:grid-cols-4 gap-4">
              {project.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;
