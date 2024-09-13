import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl font-thin'>Experience</h1>
            <div>
                {EXPERIENCES.map((experience, index) => {
                    return (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <div className='w-full lg:w-1/4'>
                                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                            </div>
                            <div className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{experience.role} -
                                    <span className='text-sm text-purple-300'>{experience.company}</span>
                                </h6>
                                <p className='mb-4 text-sm text-neutral-400'>{experience.description}</p>
                                <div className='grid grid-cols-2 sm:grid-cols-3 md:block lg:block'>
                                    {experience.technologies.map((tech, index) => {
                                        return (
                                            <span className=' mr-2 mt-4 text-sm text-purple-800 bg-neutral-900 px-2 py-1 rounded' key={index}>{tech}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience
