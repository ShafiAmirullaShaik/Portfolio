import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { DiMsqlServer } from "react-icons/di";
import { FaRobot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLightDarkMode } from '../context/LightDarkMode';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})

const Technologies = () => {

    const {isLight} = useLightDarkMode();

    return (
        <div className={`border-b ${!isLight ? 'text-neutral-300 border-neutral-900' : 'text-black border-neutral-300'} pb-4`}>
            <motion.h2 
            whileInView={{opacity : 1, y : 0}}
            initial = {{opacity : 0, y : -100}}
            transition={{duration : 1.5}}
            className={`my-20 text-center text-4xl ${!isLight ? 'text-neutral-400 font-thin' : 'text-black font-light'}`}>
                Technologies
            </motion.h2>
            <motion.div whileInView = {{opacity : 1, x : 0}}
            initial = {{opacity : 0, x : -100}}
            transition = {{duration : 1.5}}
            className='flex flex-wrap items-center justify-center gap-4 mb-5'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='p-4'>
                    <FaHtml5 className='text-7xl text-orange-700' />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className='p-4'>
                    <FaCss3Alt className='text-7xl text-blue-700' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className='p-4'>
                    <FaBootstrap className='text-7xl text-violet-700' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='p-4'>
                    <FaSquareJs className='text-7xl text-yellow-500' />
                </motion.div>
                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className='p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='p-4'>
                    <SiTailwindcss className='text-7xl text-cyan-600' />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className='p-4'>
                    <IoLogoPython className='text-7xl text-green-600' />
                </motion.div>
                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className='p-4'>
                    <DiMsqlServer className='text-7xl text-red-500' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className='p-4'>
                    <FaRobot className='text-7xl text-blue-900' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
