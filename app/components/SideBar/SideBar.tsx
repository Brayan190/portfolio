"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const SideBar = () => {
    const [onOpen, setOnOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setOnOpen(false);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const scrollToHome = () => {
    //     const homeElement = document.getElementById('home');
    //  console.log("homeElement",homeElement)
    //     if (homeElement) {
    //     homeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', });
    //   }
    
    //   };
    //   const scrollToHome = () => {
    //     scroll.scrollTo('home', {
    //       smooth: true,
    //       duration: 1000,  // Ajusta la duración según tus preferencias
    //     });
    //     setOnOpen(false); // Cierra el Sidebar después de hacer clic en el enlace
    //   };
    

    return (
        <div className={`relative`}>
            <div className="navbar">
                <button onClick={() => setOnOpen(true)} className='bg-gray-300 dark:bg-gray-900'>
                    <p className='text-4xl hover:text-gray-500 '> <IoMdMenu /></p>
                </button>
            </div>

            <div className={`fixed top-0 left-0 w-1/2  ${onOpen ? 'block' : 'hidden'} z-51 bg-gray-100 dark:bg-gray-800 `}>
                <div className=' h-screen p-5 divide-y divide-gray-300'>
                    <div className='flex justify-between '>
                        <h1 className='text-xl text-emerald-700 dark:text-emerald-300 self-center'> Brayan Arias</h1>
                        <button onClick={() => setOnOpen(false)} className=''>
                            <p className='text-2xl hover:text-gray-500 '> <IoMdClose /></p>
                        </button>

                    </div>
                    {/* <div className='bg-gray-950 p-px mt-2'></div> */}
                    <div className='space-y-1 px-2 pb-3 pt-2  h-full'>
                        <Link href={'#home'} onClick={() => [setOnOpen(false)]} className='text-2xl sm:text-1xl hover:text-gray-500 block '>Home</Link>
                        <Link href={'#skills'} onClick={() => setOnOpen(false)} className='text-2xl sm:text-1xl hover:text-gray-500 block '>Skills</Link>
                        <Link href={'#projects'} onClick={() => setOnOpen(false)} className='text-2xl sm:text-1xl hover:text-gray-500 block '>Projects</Link>
                        <Link href={'#about'} onClick={() => setOnOpen(false)} className='text-2xl sm:text-1xl hover:text-gray-500 block '>About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
