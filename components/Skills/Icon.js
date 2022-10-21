// import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion'
// import Image from 'next/image';
import React from 'react'


// type Props = {
//     icon:String;
//     directionleft?: boolean;
// }




function Icon({directionleft,icon,progress}) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionleft? -200: 200,
            opacity:1,
        }}
        transition={{
            duration: 0.5
        }}
        viewport={{once:true}}
        whileInView={{
            opacity: 1,x:0,
        }}
        src={icon}
        className="rounded-full border border-gray-500 object-cover w-24 h- xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out" />
        




        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center h-full justify-center'>
                <p className='text-2xl font-bold opacity-100 text-black'>{progress}</p>
            </div>
        </div>
    </div>
  )
}


export default Icon


