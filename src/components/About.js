import React,{useState,useRef,useEffect} from "react";
import Self from "../images/self.jpg";
import webDev from "../images/icons/webDev.png";
import cv from "../Files/bhupendraCV.pdf";
const About = () => {
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
    <div ref={ domRef } className={ `fade-in-top ${ isVisible ? 'is-visible' : '' }` }>
      <div id="myAbout" className="aboutSection">
        <div className="aboutImage">
          <img src={Self} alt="Me" />
        </div>
        <div className="aboutRightContent">
          <div className="aboutRightQuote">
            <h2>Bring Passion to</h2>
            <h2 className="aboutRightHighlight">everything I do</h2>
          </div>
          <p className="self-intro">Hey There! My name is Bhupendra Patel. I am 21 years old and a third year student from Lovely Professional University. My hometown is in Madhya Pradesh and I live in Bangalore.</p>
          <div className="aboutSkillSection">
            <div className="aboutSkillSectionInnerOne">
              <div className="aboutSkillDetailOne">
                <img src={webDev} alt="webDev"/>
                <h4>Web development</h4>
              </div>
              <div className="aboutSkillDetailTwo">
                <img src={webDev} alt="webDev"/>
                <h4>Web development</h4>
              </div>
            </div>
            <div className="aboutSkillSectionInnerTwo">
              <div className="aboutSkillDetailOne">
                <img src={webDev} alt="webDev"/>
                <h4>Web development</h4>
              </div>
              <div className="aboutSkillDetailTwo">
                <img src={webDev} alt="webDev"/>
                <h4>Web development</h4>
              </div>
            </div>
          </div>
          <form method="get" action={cv} target="_blank">
            <button className="aboutResume" download>Download CV</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
