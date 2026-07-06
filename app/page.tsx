import Image from 'next/image'
import Footer from './components/Footer/Footer'
import About from './components/Main/About'
import HomeMain from './components/Main/HomeMain'
import Skills from './components/Main/Skills/Skills'
import Projects from './components/Main/Projects/Projects'
import ContactMe from './components/Main/ContactMe/ContactMe'
export default function Home() {
  return (
    <main className='bg-gray-100 dark:bg-gray-800'>
      <div >
        <HomeMain />
        <Skills />
        <Projects />
        {/* <About /> */}
        <ContactMe/>
      </div>
    </main>
  )
}
