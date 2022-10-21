import React from 'react'
import Head from 'next/head'
import type { NextPage } from "next"
import Header from "../components/Header/Header"
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen hide-scroll snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>
          Final Portfolio
        </title>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>



      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>


      

      {/* Skills */}

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>


      {/* Contect Me */}

      <section id='contact' className='snap-center'>
        <Contact />
      </section>

    </div>
  )
}

export default Home
