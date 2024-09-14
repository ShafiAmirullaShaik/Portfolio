import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 mb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-thin"
      >
        Projects
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className="relative group overflow-hidden bg-neutral-900 rounded-lg shadow-lg"
            >
              <div className="">
                <img
                  className="w-full h-64 object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-center px-4 py-2 items-center text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-500">
                <h2 className="text-2xl text-semibold text-white mb-3 sm:text-sm">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4 font-light text-sm sm:text-[10px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center">
                  {project.technologies.map((tech, techIndex) => {
                    return (
                      <span
                        className="mr-2 mt-2 text-sm text-white bg-purple-500 px-2 py-1 rounded sm:text-[10px]"
                        key={techIndex}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
