import React from 'react'
import { HERO_CONTENT } from '../constants'
import { FaUserTie } from "react-icons/fa6";
import { motion } from "framer-motion"
// import profilePic from '../assets/kevinRushProfile.png'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <div className='border-b h-[60vh] border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Shafi Amirulla Shaik</motion.h1>
                        <motion.span variants={container(0.5)}
                            initial='hidden'
                            animate='visible'
                            className='bg-gradient-to-r from-pink-300 via-slate-500 font-light to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent '>Full Stack Developer</motion.span>
                        <motion.p variants={container(1)}
                            initial='hidden'
                            animate='visible' 
                            className='my-2 max-w-xl py-6 font-light tracking-tighther text-justify'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8 hidden lg:flex justify-center items-center'>
                    <div className='flex justify-center'>
                        {/* <p className='text-9xl font-thin text-neutral-300'>Sa</p> */}
                        <motion.p initial={{x : 100, opacity: 0}} animate={{x : 0, opacity : 1}} transition={{duration:1, delay:1.2}}><FaUserTie className='text-9xl text-neutral-400' /></motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
