import { motion } from 'framer-motion'
import React from 'react'
import Icon from './Icon'
import Icon2 from './Icon2'



type Props = {}

function Skills({}: Props) {
  return (
    <motion.div initial={{}} className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for current profiency
        </h3>
        <div className='grid grid-cols-4 gap-5 lg:gap-8 lg:grid-cols-8'>
            <Icon progress={"82%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=js"/>
            <Icon progress={"93%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=html"/>
            <Icon progress={"90%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=css"/>
            <Icon progress={"75%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=nodejs"/>
            <Icon progress={"66%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=cpp"/>
            <Icon progress={"70%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=git"/>
            <Icon progress={"82%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=nextjs"/>
            <Icon progress={"86%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=react"/>
            <Icon2 progress={"86%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=tailwind"/>
            <Icon2 progress={"70%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=ts"/>
            <Icon2 progress={"80%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=c"/>
            <Icon2 progress={"90%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=py"/>
            <Icon2 progress={"10%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=nuxtjs"/>
            <Icon2 progress={"10%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=kotlin"/>
            <Icon2 progress={"1%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=cs"/>
            <Icon2 progress={"68%"} directionleft="true" icon="https://skills.thijs.gg/icons?i=mongodb"/>
            
        </div>
    </motion.div>
  )
}

export default Skills