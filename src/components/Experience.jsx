import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"
import { useLightDarkMode } from '../context/LightDarkMode';

const Experience = () => {

    const { isLight } = useLightDarkMode();

    return (
        <div className={`border-b ${!isLight ? 'text-neutral-300 border-neutral-900' : 'text-black border-neutral-300'} pb-4`}>
            <motion.h1 
            whileInView={{opacity:1, y : 0}}
            initial = {{opacity :0, y : -100}}
            transition={{duration : 0.5}}
            className={`my-20 text-center text-4xl ${!isLight ? 'text-neutral-400 font-thin' : 'text-black font-light'}`}>Experience</motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => {
                    return (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div 
                            whileInView={{opacity : 1, x : 0}}
                            initial = {{opacity: 0, x : -100}}
                            transition ={{duration : 1}}
                            className='w-full lg:w-1/4'>
                                <p className={`mb-2 text-sm ${!isLight ? 'text-neutral-400' : 'text-black'}`}>{experience.year}</p>
                            </motion.div>
                            <motion.div 
                            whileInView={{opacity:1, x : 0}}
                            initial = {{opacity: 0, x : 100}}
                            transition={{duration : 1}}
                            className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{experience.role} -
                                    <span className='text-sm text-purple-400'>{experience.company}</span>
                                </h6>
                                <p className={`mb-4 text-sm ${!isLight ? 'text-neutral-400' : 'text-black'}`}>{experience.description}</p>
                                <div className='grid grid-cols-2 sm:grid-cols-3 md:block lg:block'>
                                    {experience.technologies.map((tech, index) => {
                                        return (
                                            <span className={`mr-2 mt-4 text-sm ${!isLight ? 'text-purple-800 bg-neutral-900' : 'text-white bg-purple-400'} px-2 py-1 rounded`} key={index}>{tech}</span>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience
