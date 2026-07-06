'use client'
import React, {  useState } from 'react'
import { Projects } from '../../data/models'
import { FaGithub,FaExternalLinkAlt,FaArrowCircleRight,FaArrowCircleLeft  } from 'react-icons/fa'
import { transform } from 'next/dist/build/swc'

const Corousel = ({ sliders }: { sliders: Projects[] }) => {
let [current, setCurrent]= useState(1)

const previusSlide = () =>{
  console.log(current)
  if (current === 0)setCurrent(sliders.length -1)
  else setCurrent(current-1)
}

const nextSlide = () =>{
  console.log(current)
  if (current === sliders.length -1)setCurrent(0)
  else setCurrent(current+1)
}
  return (  
    <div className='overflow-hidden relative'>
      <div className={` flex trasition ease-out duration-400`}
      style={{transform:`translateX(-${current*100}%)`}}
      >
        {sliders.map(({id,image,title,build_with,description}: Projects) =>
          <img alt='' src={image} key={id}/>
        )}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-2xl">
        <button onClick={previusSlide}>
          <FaArrowCircleLeft/>
        </button>
        <button onClick={nextSlide}>
          <FaArrowCircleRight/>
        </button>
      </div>
    </div>
  )
}

export default Corousel
