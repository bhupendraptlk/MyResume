import React from 'react';
import BsCarousel from './Carousel';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';

const Main = () =>{
    return(
      <>
      <div className='container'>
        <BsCarousel />
        <About />
        <Education />
        <Skills />
        <Projects />
      </div>
      </>
    );
}

export default Main;