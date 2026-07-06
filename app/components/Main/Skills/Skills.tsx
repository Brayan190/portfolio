"use client"
import React from 'react'
import { backend, frontend } from '../data/data'
import { Fade, Slide } from 'react-awesome-reveal'

const Skills = () => {
  return (
    <div className=" pt-32 justify-center " id='skills'>

      <div className='text-center'>
        <Fade cascade direction='right'>
          <span className='text-2xl p-1 sm:text-3xl'>TECHNICAL AND PROFESSIONAL</span>
          <h2 className='text-4xl text-emerald-700 p-5 sm:text-5xl dark:text-emerald-400'>My Skills</h2>
        </Fade>
      </div>
      <div>
        <div className='text-center p-3'>
          <Slide cascade>
            <h2 className='text-xl font-semibold mb-4 dark:text-gray-200'>Frontend</h2>
            <div className='grid grid-cols-4 gap-x-8 gap-y-6 rounded-xl border-2 border-zinc-500 p-6 justify-items-center mx-auto max-w-sm md:grid-cols-8 md:max-w-4xl'>
              {frontend.map(({ id, name, img }) => (
                <div key={id} className='flex flex-col items-center gap-1'>
                  <div dangerouslySetInnerHTML={{ __html: img }} className='w-12 h-12 [&>svg]:w-full [&>svg]:h-full' />
                  <span className='text-xs text-gray-600 dark:text-gray-300'>{name}</span>
                </div>
              ))}
            </div>
          </Slide>
        </div>
        <div className='text-center p-3'>
          <Slide cascade direction='right'>
            <h2 className='text-xl font-semibold mb-4 dark:text-gray-200'>Backend & Tools</h2>
            <div className='grid grid-cols-4 gap-x-8 gap-y-6 rounded-xl border-2 border-zinc-500 p-6 justify-items-center mx-auto max-w-sm md:grid-cols-7 md:max-w-4xl'>
              {backend.map(({ id, name, img }) => (
                <div key={id} className='flex flex-col items-center gap-1'>
                  <div dangerouslySetInnerHTML={{ __html: img }} className='w-12 h-12 [&>svg]:w-full [&>svg]:h-full' />
                  <span className='text-xs text-gray-600 dark:text-gray-300'>{name}</span>
                </div>
              ))}
            </div>
          </Slide>
        </div>
      </div>
    </div>
  )
}

export default Skills
