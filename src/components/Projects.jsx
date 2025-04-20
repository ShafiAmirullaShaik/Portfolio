import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useLightDarkMode } from "../context/LightDarkMode";

const Projects = () => {
  const { isLight } = useLightDarkMode();

  return (
    <div
      className={`border-b ${
        !isLight ? "text-neutral-300 border-neutral-900" : "text-black border-neutral-300"
      } pb-8 mb-10`}
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-20 text-center text-4xl ${
          !isLight ? "text-neutral-400 font-thin" : "text-black font-light"
        }`}
      >
        Projects
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className={`backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-xl shadow-lg p-5 border border-white/20 transition-all duration-300 hover:shadow-purple-500/40 ${
              isLight ? "bg-white/40" : "bg-white/10"
            }`}
          >
            <h2 className="text-xl text-purple-400 font-semibold mb-2">{project.title}</h2>
            <p className="text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-purple-500 text-white text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
