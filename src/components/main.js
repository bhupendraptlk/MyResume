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
          <li><a href="#myAbout">ABOUT</a></li>
          <li><a href="#myEducation">EDUCATION</a></li>
          {/* <li><a href="#mySkills">Skills</a></li> */}
          <li><a href="#myProjects">PROJECTS</a></li>
        </ul>
        <About />
        <Education />
        <Projects />
      </div>
      </>
    );
}

export default Main;