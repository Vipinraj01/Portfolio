import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'; 
import { Link } from 'react-scroll';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); 
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} offset={-50} duration={-500}  className='desktopMenuListItem'>About</Link>
          <Link activeClass='active' to='works' spy={true} offset={-50} duration={500}  className='desktopMenuListItem'>Portfolio</Link> 
          <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500}  className='desktopMenuListItem'>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500}  className='desktopMenuListItem'>Contact</Link> 
        </div>
        <button className='desktopMenubtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); 
        }}>
          <img src={contactImg} alt="" className='desktopMenuImg'/>
          Contact Me
        </button>
        <img src={menu} alt="Menu" className='mobmenu' onClick={()=>setShowMenu(!showMenu)} /> 
        <div className="mobileMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500}  className='ListItem' onClick={() => setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} offset={-50} duration={500}  className='ListItem' onClick={() => setShowMenu(false)}>Portfolio</Link> 
          <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500}  className='ListItem' onClick={() => setShowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500}  className='ListItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
  );
}

export default Navbar;
