import React from 'react';
import linkedIn from '../images/icons/linkedin.svg';
import github from '../images/icons/github.svg';
import twitter from '../images/icons/twitter.png';
import instagram from '../images/icons/instagram.svg';

export const Socials=()=>{
    return(
        <>
        <div className='socialWrapper'>
          <div className="socialIcons flex fc">
              <a href="https://www.linkedin.com/in/bhupendraptlk/" target="_blank"><img src={linkedIn} alt="LinkedIn"/></a>
              <a href="https://www.github.com/bhupendraptlk/" target="_blank"><img src={github} alt="Github"/></a>
              <a href="https://twitter.com/bhupendraptlk" target="_blank"><img src={twitter} alt="Twitter"/></a>
              <a href="https://www.instagram.com/bhupendraptlk/" target="_blank"><img src={instagram} alt="instagram"/></a>
          </div>
        </div>
        </>
    );
}
export default Socials;