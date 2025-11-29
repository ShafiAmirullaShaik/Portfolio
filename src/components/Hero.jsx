import React from "react";
import { motion } from "framer-motion";
import { useLightDarkMode } from "../context/LightDarkMode";
import { FaChevronDown } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const { isLight } = useLightDarkMode();

  return (
    <>
      <div
        className={`border-b w-full ${
          !isLight
            ? "text-neutral-300 border-neutral-900"
            : "text-black border-neutral-300"
        } pb-10 mb-30 mt-0 sm:mb-50 flex flex-col items-center justify-center`}
      >
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-8 text-6xl font-thin tracking-tight text-center lg:mt-16 lg:text-8xl w-full"
        >
          Shafi Amirulla Shaik
        </motion.h1>

        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 font-light to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center w-full"
        >
          Backend Engineer And AI Developer
        </motion.span>

        <a href="/Shafi_Amirulla_Shaik_Py_AI.pdf" download>
          <motion.button
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className={`border px-5 py-3 ${
              !isLight
                ? "text-purple-400 font-medium hover:text-white hover:bg-purple-900 border-purple-900"
                : "text-purple-500 font-medium border-purple-400 hover:bg-purple-400 hover:text-white"
            } text-sm bg-transparent hover:border-none mt-8`}
          >
            Download CV
          </motion.button>
        </a>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center w-full mt-8"
        >
            <FaChevronDown className="text-4xl text-purple-500 hover:text-purple-700 animate-bounce cursor-pointer transition-all duration-300" />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;