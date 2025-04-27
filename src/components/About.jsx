import React from "react";
// import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from "../constants";
import { BsPersonVideo3 } from "react-icons/bs";
import { motion } from "framer-motion";
import { useLightDarkMode } from '../context/LightDarkMode';

const About = () => {
  const { isLight } = useLightDarkMode();

  return (
    <div
      id="about"
      className={`border-b ${!isLight ? 'text-neutral-300 border-neutral-900' : 'text-black border-neutral-300'} pb-24`}
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-20 text-center ${!isLight ? 'text-neutral-400 font-light' : 'text-black font-light'} text-4xl `}
      >
        About
        <span className="text-neutral-500 ml-1">Me</span>
      </motion.h1>
      <div className="w-full">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex justify-center w-full p-10">
            <p className="my-2 py-6 font-light tracking-tighter text-center w-full font-poppins">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
