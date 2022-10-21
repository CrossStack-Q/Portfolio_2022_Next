import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:1.2}} className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        
        whileInView={{
            x:0,
            opacity:1,
        }}

        transition={{
            duration:1
        }}
        
        src="https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png"

        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
            Full Stack <span className='underline decoration-[#F7AB0A]/50'>Web Developer</span>
            </h4> 
            <p className='text-base'>
            An Enthusiast Coder Eager to contribute to team success through hard work, skills, attention to details and excellent organizational skills. Currently, Exploring the world of Technology as Web3 and as a Second year student. 
                <br />Doing everything except nothing. I have a passion for the Artificial Intelligence and where it's headed. I enjoy coding and observing nature to counteract my progress. In Nature vs Nurture I prefer Nature. Python and R are learning Currently. Till now Web Development, Android Development ,Flutter, ReactJS and NextJs.
            </p>
        </div>
    </motion.div>
  )
}

export default About