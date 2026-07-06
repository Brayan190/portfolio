import React from 'react'
import Home from "../../../public/images/softw3.webp"

const About = () => {
  return (
    <div className="  pt-32 mx-8" id='about' >
      <h1 className='text-4xl sm:text-5xl  text-center '>About Me</h1>
      <div className=' sm:grid sm:grid-cols-2 content-center justify-items-center'>
      <div className='pt-5 flex items-center' > <p className='mt-5 text-justify m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur impedit incidunt blanditiis in neque voluptate repellendus laboriosam quibusdam obcaecati! Aperiam unde quae voluptates veritatis molestiae eos, deleniti impedit laudantium? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, porro totam eligendi cum praesentium distinctio eius saepe maiores officia laboriosam consectetur qui accusantium assumenda quas laborum quos. Provident, error similique? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore neque, molestiae magni incidunt voluptatum dolorum eum accusantium voluptatibus at accusamus, eaque aliquam similique nulla repellendus voluptatem qui ducimus consequuntur iusto.</p></div>
        <div className='pt-5 flex items-center' ><img  src={Home.src} alt='' width={500} height={500}/></div>
      </div>
      <div className='p-5 grid  grid-cols-2 sm:grid-cols-3 gap-4 place-content-center'>
        <div>
          <h3 className='font-bold'>ncsdjcsndjdcnjcd</h3>
          <ul>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold'>ncsdjcsndjdcnjcd</h3>
          <ul>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold'>ncsdjcsndjdcnjcd</h3>
          <ul>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
            <li>mcdkcld</li>
          </ul>
        </div>
       
      </div>
      <div className='grid justify-items-center'>
        <a className="p-3 bg-emerald-700 text-white dark:bg-emerald-400 rounded-xl text-3xl  m-10" href=''>Resume</a>
          {/* <a className=" " href=''>Resume</a> */}
        </div>
    </div>
  )
}

export default About
