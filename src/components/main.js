import React from 'react';
import BsCarousel from './Carousel';
import About from './About';
import Education from './Education';
import Projects from './Projects';

const Main = () =>{
    return(
      <>
      <div className='container'>
        <BsCarousel />
        <ul className="menuContent">
          <li><a href="#myAbout">About</a></li>
          <li><a href="#myEducation">Education</a></li>
          <li><a href="#mySkills">Skills</a></li>
          <li><a href="#myProjects">Projects</a></li>
        </ul>
        <About />
        <Education />
        <Projects />
      </div>
      </>
    );
}

export default Main;