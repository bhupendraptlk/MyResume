import React from "react";
import Gold from "../images/goldsGym_2.png";
import Pms from "../images/pms.png";
const Projects = () => {
  return (
    <>
      <div id="myProjects" className="projectSectionOuter">
        <h2 className="projectTitle">Projects</h2>
        <div className="projectSection projectFirst">
            <div className="projectDetailSection">
                <h2>Gold's Gym</h2>
                <p>A project done in 2nd Semester using HTML5, CSS3, Javascript and Bootstrap</p>
            </div>
            <img src={Gold} alt="gold's gym"/>
        </div>
        <div className="projectSection">
            <img src={Pms} alt="PMS"/>
            <div className="projectDetailSection">
                <h2>Parking Management System</h2>
                <p>A project done in 3rd Semester implemented using Python and SQL. This project was based on python GUI where a user could login into the parking management system and or create a new account and book a parking slot with just few clicks.</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
