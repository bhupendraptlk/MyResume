import React from 'react';
import linkedIn from '../images/icons/linkedin.svg';
import twitter from '../images/icons/twitter.png';
import instagram from '../images/icons/instagram.svg';
import facebook from '../images/icons/facebook.svg';

export const Socials=()=>{
    return(
        <>
        <div className='socialWrapper'>
          <div className="socialIcons flex fc">
              <a href="https://www.linkedin.com/in/bhupendraptlk/" target="_blank"><img src={linkedIn} alt="LinkedIn"/></a>
              <a href="https://twitter.com/bhupendraptlk" target="_blank"><img src={twitter} alt="Twitter"/></a>
              <a href="https://www.instagram.com/bhupendraptlk/" target="_blank"><img src={instagram} alt="instagram"/></a>
              <a href="https://www.linkedin.com/in/bhupendraptlk/" target="_blank"><img src={facebook} alt="Facebook"/></a>
          </div>
        </div>
        </>
    );
}
export default Socials;