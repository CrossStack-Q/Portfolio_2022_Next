import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"

type Props = {}

function Contact({}: Props) {
  return (
    <div  className='h-screen relative flex flex-col text-center md:text-left md:flex-row w-[100vw] px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10 pt-20 '>
            <h4 className='text-4xl font-semibold text-center'>
                 I have got just what you need.{" "}
                 <span className='decoration-[#F7AB0A] underline'>Lets Talk</span>
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl'>+9876543</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl'>Faridabad</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2xl'>crossrehk@gmail.com</p>
                </div>
            </div>


            <form action="" className='flex flex-col space-y-2 w-[90vw] mx-auto'>
                <div className='hidden md:flex space-x-2'>
                    <input placeholder='Name' className='contactInput' type="text" /><input placeholder='Email' className='contactInput' type="text" />
                </div>
                <input placeholder='Name' className='contactInput md:hidden' type="text" /><input placeholder='Email' className='contactInput' type="text" />
                <input placeholder='Subject' className='contactInput md:hidden' type="text" />
                <textarea placeholder='Write It' className='contactInput' name="" id="" ></textarea>
                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>



        </div>
    </div>
  )
}

export default Contact
