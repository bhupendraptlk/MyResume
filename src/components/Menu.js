import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import hamburger from '../images/icons/hamburgerDesktop.png';
import close from '../images/icons/close.png';

const Menu = () =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
          <div className='hamburgerMenu'>
            <button type='button' onClick={handleShow}>
              <img src={hamburger}/>
            </button>
          </div>
          <Offcanvas className='bsCanvas' show={show} onHide={handleClose}>
            <Offcanvas.Body>
              <div className='flex ac'>
                <div className='modal-inner-menu flex fc jc'>
                  <div>ABOUT</div>
                  <div>EDUCATION</div>
                  <div>PROJECTS</div>
                </div>
                <div className='closeBtnOuter flex ac'>
                  <button type='button' className='closeBtn' onClick={handleClose}><img src={close}/></button>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
    );
}
export default Menu;