import React, { useEffect } from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Utsav Patel - Official Website</title>
        <meta name="description" content="Welcome to the official website of Utsav Patel. Explore my projects, blogs, and portfolio." />
        <meta name="keywords" content="Utsav Patel, Computer Engineer, Machine Learning, Android Developer" />
        <meta name="author" content="Utsav Patel" />
      </Head>
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
