import React, { useEffect } from 'react';
import Navbar from './Componnets/Navbar';
import Home from './Componnets/Home';
import Certificates from './Componnets/Certificates';
import Skills from './Componnets/Skills';
import Projects from './Componnets/Projects';
import Contact from './Componnets/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    
    Aos.init();
   
  }, [])
  
  return (

    <>
      <Navbar />
      <div className="container">
        <Home />
        <Certificates/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}


export default App
