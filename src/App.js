import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useLightDarkMode } from './context/LightDarkMode'

const App = () => {

  const { isLight } = useLightDarkMode();

return (
  <div className={`overflow-x-hidden ${!isLight ? 'text-neutral-300' : 'text-black'} antialiased h-screen`}>
    <div className='fixed top-0 -z-10 h-screen w-full'>
      {!isLight ? (
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      ) : (
        <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
      )}
    </div>
    <div className='container mx-auto px-8'>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  </div>
)
}

export default App
