import React,{useState,useEffect} from "react";
import LinkedIn from "../images/icons/linkedin.svg";
import Twitter from "../images/icons/twitter.png";
import Instagram from "../images/icons/instagram.svg";
import Facebook from "../images/icons/facebook.svg";

const Footer = () => {
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
      <div className="footerSection">
        <div className="footerProject">
          <h4>Got a project?</h4>
          <div className="footerProjectTalk"><a href="https://www.linkedin.com/in/bhupendraptlk" target="_blank">Let's Talk</a></div>
        </div>
        {/* <div className="footerMain">
          <div className="footerMainSocial">
            <a href="https://www.linkedin.com/in/bhupendraptlk" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="https://twitter.com/bhupendraptlk" target="_blank"><img src={Twitter} alt="Twitter" /></a>
            <a href="https://www.instagram.com/bhupendraptlk/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
            <a href="https://www.facebook.com/bhupendraptlk" target="_blank"><img src={Facebook} alt="Facebook" /></a>
          </div>
          <div className="footerMainTag">by Bhupendra Patel</div>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default Footer;
