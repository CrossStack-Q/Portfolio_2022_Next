import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from "./BackgroundCircle"

type Props = {}

function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: ["Anurag Sharma", "Web Developer", "BlockChain Developer","Rehk is Back"], loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen pt-28 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png" alt="" />
      <div  className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>
            {text}
            <Cursor cursorColor='#f7AB0A' />
          </span>
        </h1>
        <div className='pt-5'>
          <Link href="#about">
          <button className='heroButton'>
            About
          </button>
          </Link>
          <Link href="#experience">
          <button className='heroButton'>
            Experience
          </button>
          </Link>
          <Link href="#skills">
          <button className='heroButton'>
            Skills
          </button>
          </Link>
          <Link href="#projects">
          <button className='heroButton'>
            Projects
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
