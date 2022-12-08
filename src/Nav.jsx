import React from 'react'
import "./Nav.css"
import {useState} from 'react'
import { FcAbout } from 'react-icons/fc';
import { FcHome } from 'react-icons/fc';


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick= {() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><FcHome/></a>
      <a href="#about" onClick= {() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcAbout/></a>
      
      
      
    </nav>
  )
}

export default Nav