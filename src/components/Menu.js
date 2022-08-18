import React, { useState } from 'react';
import hamburger from '../images/icons/hamburgerDesktop.png';

const Menu = () =>{
  const [showMenu,setShowMenu]=useState(false);
    return(
        <>
          <div className='hamburgerMenu'>
            <button onClick={()=>setShowMenu(!showMenu)}><img src={hamburger}/></button>
          </div>
          <div className={showMenu? 'notHidden' : 'hidden'}>
            This will be shown
          </div>
        </>
    );
}
export default Menu;