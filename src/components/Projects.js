import React,{useState,useEffect} from "react";
import Cp from "../images/chaipointshop.png";
import Gold from "../images/goldsGym_2.png";
import Pms from "../images/pms.png";
const Projects = () => {
  const [isVisible, setVisible] = useState(true);

  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <>
      <div id="myProjects" className="projectSectionOuter">
        <h2 className="projectTitle">Projects</h2>
        <div ref={ domRef } className={ `fade-in-top ${ isVisible ? 'is-visible' : '' }` }>
          <div className="projectSection mb-48-80">
            <div className="projectDetailSection">
                <h2>Chaipoint</h2>
                <p>A project done during internship</p>
            </div>
          <a href="https://chaipointshop.com" target='_blank'><img src={Cp} alt="chaipoint"  className="w100"/></a>
          </div>
          <div className="projectSection mb-48-80">
            <a href="https://bhupendraptlk.github.io/Gold-s-Gym/" target='_blank'><img src={Gold} alt="gold's gym"  className="w100"/></a>
            <div className="projectDetailSection">
                <h2>Gold's Gym</h2>
                <p>A project done in 2nd Semester using HTML5, CSS3, Javascript and Bootstrap</p>
            </div>
          </div>
          <div className="projectSection">
            <div className="projectDetailSection">
                <h2>Parking Management System</h2>
                <p>A project done in 3rd Semester implemented using Python and SQL. This project was based on python GUI where a user could login into the parking management system and or create a new account and book a parking slot with just few clicks.</p>
            </div>
            <img src={Pms} alt="PMS"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
