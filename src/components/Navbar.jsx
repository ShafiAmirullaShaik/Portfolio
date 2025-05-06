import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiFillSun } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { useLightDarkMode } from "../context/LightDarkMode";

const Navbar = () => {
  const { isLight, toggleTheme } = useLightDarkMode();

  return (
    <motion.nav
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className={`mb-20 flex items-center justify-between py-5 px-6 rounded-xl sticky top-0 z-50 shadow-md border 
        backdrop-blur-md ${
          isLight
            ? "bg-white/40 border-neutral-200 text-black"
            : "bg-white/10 border-neutral-800 text-neutral-200"
        }`}
    >
      {/* Logo with hyperlink */}
      <div
        className={`flex flex-shrink-0 items-center ${
          isLight ? "font-light" : "font-thin text-neutral-300"
        }`}
      >
        <a
          href="https://www.linkedin.com/in/shafiamirullashaik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="\Profile.jpg"
            className="h-10 w-10 rounded-full transition-transform duration-300 ease-in-out hover:scale-150 origin-center"
            alt="Profile"
          />
        </a>
      </div>

      {/* Right-side icons */}
      <div
        className={`flex gap-4 items-center justify-center text-2xl ${
          isLight ? "text-black" : "text-neutral-300"
        }`}
      >
        <a
          href="https://www.linkedin.com/in/shafiamirullashaik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a
          href="https://www.naukri.com/mnjuser/homepage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
            alt="Naukri"
            className="h-6 w-auto hover:opacity-80 transition-opacity duration-300"
          />
        </a>
        {isLight ? (
          <MdDarkMode
            className="cursor-pointer hover:text-purple-500"
            onClick={toggleTheme}
          />
        ) : (
          <AiFillSun
            className="cursor-pointer hover:text-yellow-400"
            onClick={toggleTheme}
          />
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
