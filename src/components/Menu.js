import React, { useState } from 'react';
import hamburger from '../images/icons/hamburgerDesktop.png';
import close from '../images/icons/close.png';

const Menu = () =>{
  const [showMenu,setShowMenu]=useState(false);
  const showModal = () =>{
    setShowMenu(!showMenu);
    var modal=document.getElementById('modal');
    console.log(modal);
    modal.style.left='0';
    modal.style.opacity='100%';
  }
    return(
        <>
          <div className='hamburgerMenu'>
            <button type='button' onClick={showModal}><img src={hamburger}/></button>
          </div>
          <div id="modal" className={showMenu? 'notHidden' : 'hidden'}>
            <div className='menu-modal-content flex ac'>
              <div className='modal-inner-menu flex fc jc'>
                <div>ABOUT</div>
                <div>EDUCATION</div>
                <div>PROJECTS</div>
              </div>
              <div className='closeBtnOuter flex ac'>
                <button type='button' className='closeBtn' onClick={()=>setShowMenu(!showMenu)}><img src={close}/></button>
              </div>
            </div>
          </div>
        </>
    );
}
export default Menu;