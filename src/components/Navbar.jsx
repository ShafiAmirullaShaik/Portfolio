import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='mb-20 flex items-center justify-between py-5 text-neutral-200'>
            <div className='flex flex-shrink-0 items-center'>
                <p className='mx-2 text-3xl font-thin'>Sa</p>
            </div>
            <div className='flex gap-4 items-center m-8 justify-center text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </motion.nav>
    )
}

export default Navbar
