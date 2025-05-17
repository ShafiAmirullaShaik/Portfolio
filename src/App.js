import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Research from './components/Research';
import ResearchSection from './components/ResearchSection';
import { useLightDarkMode } from './context/LightDarkMode';

const App = () => {
  const { isLight } = useLightDarkMode();

  return (
    <div className={`overflow-x-hidden ${!isLight ? 'text-neutral-300' : 'text-black'} antialiased h-screen`}>
      {/* Background Effect */}
      <div className='fixed top-0 -z-10 h-screen w-full'>
        {!isLight ? (
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        ) : (
          <div className="absolute top-0 -z-10 h-full w-full bg-white">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
        )}
      </div>

      {/* Main Container */}
      <div className='container mx-auto px-8'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Technologies />
              <Experience />
              <Projects />
              <Certifications />
              <ResearchSection />
              <Contact />
            </>
          } />
          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
