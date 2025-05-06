import React from "react";
import { HERO_CONTENT } from "../constants";
import { FaUserTie } from "react-icons/fa6";
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
        className={`border-b ${
          !isLight
            ? "text-neutral-300 border-neutral-900"
            : "text-black border-neutral-300"
        } pb-10 mb-30 sm:mb-50`}
      >
        <div className="flex flex-wrap">
          {/* Left section (Name, Title, Button) */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              >
                Shafi Amirulla Shaik
              </motion.h1>

              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 font-light to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Backend Engineer, AI Research And Developer
              </motion.span>

              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tight text-justify"
              >
                {HERO_CONTENT}
              </motion.p>

              <a href="/Shafi_Amirulla_Shaik_Resume.pdf" download>
                <motion.button
                  variants={container(1.5)}
                  initial="hidden"
                  animate="visible"
                  className={`border px-5 py-3 ${
                    !isLight
                      ? "text-purple-400 font-thin hover:text-white hover:bg-purple-900 border-purple-900"
                      : "text-purple-500 font-light border-purple-400 hover:bg-purple-400 hover:text-white"
                  } text-sm bg-transparent hover:border-none`}
                >
                  Download Resume
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right section (Icon) */}
          <div className="w-full lg:w-1/2 lg:p-8 hidden lg:flex justify-center items-center">
            <div className="flex justify-center">
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <FaUserTie
                  className={`text-9xl ${
                    !isLight ? "text-neutral-400" : "text-black"
                  }`}
                />
              </motion.p>
            </div>
          </div>

          {/* Bouncing Down Icon */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex justify-center w-full mt-8"
          >
            <a href="#about">
              <FaChevronDown className="text-4xl text-purple-500 hover:text-purple-700 animate-bounce cursor-pointer transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
