import React from "react";
import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
import { useLightDarkMode } from "../context/LightDarkMode";
import { AiOutlineCheck } from "react-icons/ai";

const Certifications = () => {
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
        Certifications
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {CERTIFICATIONS.map((certification, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className={`backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-xl shadow-lg p-5 border border-white/20 transition-all duration-300 hover:shadow-purple-500/40 ${
              isLight ? "bg-white/40" : "bg-white/10"
            }`}
          >
            <div className="flex flex-col justify-center p-5 items-center mb-2">
              <div className="bg-purple-300 mb-2 text-purple-700 p-1 rounded-full mr-2">
                <AiOutlineCheck />
              </div>
              <h2 className="text-xl mb-3 text-purple-400 font-semibold">
                {certification.name}
              </h2>
            <p className="text-sm leading-relaxed">
              {certification.year}
            </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
import React from "react";
import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
import { useLightDarkMode } from "../context/LightDarkMode";
import { AiOutlineCheck } from "react-icons/ai";

const Certifications = () => {
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
        Certifications
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {CERTIFICATIONS.map((certification, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className={`backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-xl shadow-lg p-5 border border-white/20 transition-all duration-300 hover:shadow-purple-500/40 ${
              isLight ? "bg-white/40" : "bg-white/10"
            }`}
          >
            <div className="flex flex-col justify-center p-5 items-center mb-2">
              <div className="bg-purple-300 mb-2 text-purple-700 p-1 rounded-full mr-2">
                <AiOutlineCheck />
              </div>
              <h2 className="text-xl mb-3 text-purple-400 font-semibold">
                {certification.name}
              </h2>
            <p className="text-sm leading-relaxed">
              {certification.year}
            </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
