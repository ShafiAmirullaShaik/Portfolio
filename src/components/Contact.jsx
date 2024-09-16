import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 mb-5 text-purple-500 text-center text-4xl font-thin"
      >
        Get In Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4 font-thin">Hyderabad | Telangana</p>
        <p className="font-thin">+916281199239</p>
        <a href="" className="border-b border-blue-400 font-thin text-blue-400">
          shafi004shaik@gmail.com
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
