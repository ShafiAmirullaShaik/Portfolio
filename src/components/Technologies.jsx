import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { DiMsqlServer } from "react-icons/di";
import { FaRobot } from "react-icons/fa6";



const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24 '>
            <h2 className='my-20 text-center text-4xl font-thin'>
                Technologies
            </h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='p-4'>
                        <FaHtml5 className='text-7xl text-orange-700' />
                </div>
                <div className='p-4'>
                        <FaCss3Alt className='text-7xl text-blue-700' />
                </div>
                <div className='p-4'>
                        <FaBootstrap className='text-7xl text-violet-700' />
                </div>
                <div className='p-4'>
                        <FaSquareJs className='text-7xl text-yellow-500' />
                </div>
                <div className='p-4'>
                        <RiReactjsLine className='text-7xl text-cyan-400' />
                </div>
                <div className='p-4'>
                        <SiTailwindcss className='text-7xl text-cyan-600' />
                </div>
                <div className='p-4'>
                        <IoLogoPython className='text-7xl text-green-600' />
                </div>
                <div className='p-4'>
                        <DiMsqlServer className='text-7xl text-red-500' />
                </div>
                <div className='p-4'>
                        <FaRobot className='text-7xl text-blue-900' />
                </div>
            </div>
        </div>
    )
}

export default Technologies
