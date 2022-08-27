import React from 'react';
import BsCarousel from './Carousel';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Footer from './Footer';

const Main = () =>{
    return(
      <>
      <div className='container'>
        <BsCarousel />
      </div>
        <ul className="menuContent hide-mob">
          <li><a href="#myAbout">ABOUT</a></li>
          <li><a href="#myEducation">EDUCATION</a></li>
          {/* <li><a href="#mySkills">Skills</a></li> */}
          <li><a href="#myProjects">PROJECTS</a></li>
        </ul>
      <div className='container'>
        <About />
        <Education />
        <Projects />
        <Footer />
      </div>
      </>
    );
}

export default Main;