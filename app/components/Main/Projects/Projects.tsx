"use client"
import React from 'react'
import { projects } from '../data/data'
import Corousel from './components/Corousel'
import SectionProject from './components/SectionProject'
import { Zoom } from 'react-awesome-reveal'

const Projects = () => {
  return (
    <div className=" bg-grey-800 pt-32" id='projects'>
      <Zoom >
        <h1 className='text-4xl sm:text-5xl  text-center'>Projects</h1>
      </Zoom>

      <div className='w-[90%] m-auto pt-11'>
        {/* <Corousel sliders={projects} /> */}
        <Zoom>
        <SectionProject projects={projects} />
        </Zoom>
       
      </div>
    </div>

  )
}

export default Projects
