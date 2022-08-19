import React, { useState } from 'react';
import hamburger from '../images/icons/hamburgerDesktop.png';

const Menu = () =>{
  const [showMenu,setShowMenu]=useState(false);
    return(
        <>
          <div className='hamburgerMenu'>
            <button onClick={()=>setShowMenu(!showMenu)}><img src={hamburger}/></button>
          </div>
          <div className={showMenu? 'notHidden modal' : 'hidden'}>
            <div className='menu-modal-content'>
              <div className='flex js'>
                <div>Menu</div>
                <button className='closeBtn' onClick={()=>setShowMenu(!showMenu)}>X</button>
              </div>
              <div className='flex fc'>
                <div>a</div>
                <div>b</div>
                <div>c</div>
                <div>d</div>
                <div>e</div>
              </div>
            </div>
          </div>
        </>
    );
}
export default Menu;