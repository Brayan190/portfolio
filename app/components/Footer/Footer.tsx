import Link from 'next/link';
import React from 'react'
import { FaGithub, FaFacebook, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-300 inset-x-0 bottom-0 h-50 dark:bg-gray-900 '>
            <div className='flex flex-col text-gray-700 dark:text-gray-300 font-sans md:grid grid-cols-2 place-content-end'>
                <div className='p-8 '>
                    <h1 className='text-emerald-700 text-4xl pb-3 dark:text-emerald-400'>Nice to see you here</h1>
                    <a href='mailto:bryan07arias12@gmail.com' className='hover:text-gray-500'>bryan07arias12@gmail.com</a>
                    <p>
                        This website is best viewed on desktop
                        <br />
                        Made © 2023 Brayan Jesus Arias Chavez
                    </p>
                </div>

                <div className=' p-3 space-x-12 self-center justify-self-end pr-10 pb-8 '>
                    <a href={'mailto:bryan07arias12@gmail.com'} className='hover:text-gray-500'>Email</a>
                    <a href='https://www.ejemplo.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'>Linkedin</a>
                    {/* <a href={'/'} className='hover:text-gray-500'>Home</a> */}
                    <a href={'/'} className='hover:text-gray-500'>Github</a>

                </div>
                {/* <div className='grid'>
                    <div className='flex justify-center space-x-12 pb-3'>
                        <Link href={'/'} className='text-4xl hover:text-gray-500 '><FaGithub /></Link>
                        <Link href={'/'} className='text-4xl hover:text-gray-500 '> <FaDiscord /></Link>
                        <Link href={'/'} className='text-4xl hover:text-gray-500 '><FaFacebook /></Link>
                    </div>
                    <div className='pb-3'>
                        <p>@2022 Brayan Jesus Arias Chavez</p>
                    </div>
                </div> */}
            </div>
        </footer>
        //         <div className=" justify-center ">
        //   <div>01</div>
        //   <div>02</div>
        //   <div>03</div>
        // </div>
    )
}

export default Footer

{/*  */ }