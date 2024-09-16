import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";
import { AiFillSun } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { useLightDarkMode } from '../context/LightDarkMode';

const Navbar = () => {

    const { isLight, toggleTheme } = useLightDarkMode();

    return (
        <motion.nav
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='mb-20 flex items-center justify-between py-5 text-neutral-200'>
            <div className={`flex flex-shrink-0 ${!isLight ? 'text-neutral-300 font-thin' : 'text-black font-light'} items-center`}>
                <p className='mx-2 text-3xl'>Sa</p>
            </div>
            <div className={`flex gap-4  items-center ${!isLight ? 'text-neutral-300' : 'text-black'} m-8 justify-center text-2xl`}>
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
                {isLight ? (
                    <MdDarkMode className='cursor-pointer' onClick={toggleTheme} />
                ) : (
                    <AiFillSun className='cursor-pointer' onClick={toggleTheme} />
                )}
            </div>
        </motion.nav>
    )
}

export default Navbar
