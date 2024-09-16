import React from "react";
// import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useLightDarkMode } from '../context/LightDarkMode';

const Contact = () => {

  const { isLight } = useLightDarkMode();

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-10 mb-5 ${!isLight ? 'text-purple-500 font-thin' : 'text-purple-500 font-light'}  text-center text-4xl`}
      >
        Get In Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}s
        className="text-center tracking-tighter"
      >
        <p className={`my-4 ${!isLight ? 'font-thin text-white' : 'text-black font-light'}`}>Hyderabad | Telangana</p>
        <p className={`my-4 ${!isLight ? 'font-thin text-white' : 'text-black font-light'}`}>+916281199239</p>
        <a href="" className={`border-b ${!isLight ? 'border-blue-400 font-thin text-blue-400' : 'border-blue-600 font-light text-blue-600'
        } `}>
          shafi004shaik@gmail.com
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
