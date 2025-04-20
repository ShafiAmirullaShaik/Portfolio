import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLightDarkMode } from "../context/LightDarkMode";

const Footer = () => {
  const { isLight } = useLightDarkMode();

  return (
    <motion.footer
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6 }}
      className={`w-full mt-20 px-6 py-10 rounded-t-3xl shadow-2xl border-t backdrop-blur-md ${
        isLight
          ? "bg-white/50 border-neutral-300 text-black"
          : "bg-white/10 border-neutral-800 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Developer Name & Tagline */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold tracking-tight">Shafi Amirulla Shaik</h1>
          <p className="text-sm font-light tracking-wide">Software Developer | AI Enthusiast</p>
        </div>

        {/* Social Links + Contact */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex gap-4 text-2xl items-center">
            <a href="https://www.linkedin.com/in/shafiamirullashaik/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-500 transition" />
            </a>
            <a href="https://www.naukri.com/mnjuser/homepage" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" 
                alt="Naukri"
                className="w-30 h-6 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>

          <div className="text-sm text-center md:text-right leading-relaxed">
            <p>📍 Hyderabad, Telangana</p>
            <p>📞 +91 6281199239</p>
            <a href="mailto:shafi004shaik@gmail.com" className="hover:underline text-blue-400">
              ✉️ shafishaikdata@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs font-extralight tracking-widest opacity-70">
        © {new Date().getFullYear()} Shafi Amirulla Shaik • All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
