import React from 'react'
// import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { BsPersonVideo3 } from "react-icons/bs";
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl font-thin'>
                About
                <span className='text-neutral-500 ml-1'>
                    Me
                </span>
            </h1>
            <div className='flex flex-wrap'>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        {/* <img className='rounded-2xl' src={aboutImg} alt='about' /> */}
                        <BsPersonVideo3 className='text-9xl text-neutral-400 text-justify' />
                    </div>
                </motion.div>
                <motion.div whileInView={{opacity:1, x : 0}} initial={{x : 100, opacity : 0}} transition={{duration:0.5}}  
                className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighther'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
