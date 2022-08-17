import React from 'react';
import linkedIn from '../images/icons/linkedin.svg';
import twitter from '../images/icons/twitter.png';
import instagram from '../images/icons/instagram.svg';
import facebook from '../images/icons/facebook.svg';

export const Socials=()=>{
    return(
        <>
          <div className="socialIcons flex fc">
              <img src={linkedIn} alt="LinkedIn"/>
              <img src={twitter} alt="Twitter"/>
              <img src={instagram} alt="instagram"/>
              <img src={facebook} alt="Facebook"/>
          </div>
        </>
    );
}
export default Socials;