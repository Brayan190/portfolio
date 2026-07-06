"use client"
import React from 'react'
import Me from "../../../public/assets/app_images/me.png"
import { Fade, Slide } from "react-awesome-reveal";

const HomeMain = () => {

  return (
    <div className="h-auto gap-x-4 gap-y-4 pt-32 m-7 content-center justify-items-center sm:grid sm:grid-cols-2 md:grid-cols-3" id='home'>
     
      <div className='pt-5 flex items-center justify-center'>
        <Slide><img src={Me.src} alt='' width={300}  height={300} className='rounded-full'/></Slide>
      </div>
      <div className='pt-10  md:col-span-2'>

        <Fade cascade  direction='up'>
          <span  className='text-4xl sm:text-5xl line-clamp-6'>Brayan Arias
          </span><br/>
      
        <span className='text-4xl sm:text-5xl text-emerald-700 dark:text-emerald-400 tracking-wider font-bold  '>Full-Stack Developer</span>
        <p className='text-xl pt-5 pl-2 text-justify'>Results-driven Full-Stack Developer specializing in scalable web applications and ERP solutions using Python, Node.js, C#, React, and Next.js. Skilled in Odoo development, RESTful API integrations, and PostgreSQL optimization, with a strong focus on clean architecture, performance, and maintainable code.</p>
        </Fade>
      </div> 
    </div>
  )
}

export default HomeMain
