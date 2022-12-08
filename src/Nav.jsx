import React from 'react'
import "./Nav.css"
import {useState} from 'react'
import { FcAbout } from 'react-icons/fc';
import { FcHome } from 'react-icons/fc';



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="main" onClick= {() => setActiveNav('main')} className={activeNav === "main" ? 'active' : ''}><FcHome size={35}/></a>
      <a href="#about" onClick= {() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcAbout size={35}/></a>
      
      
      
    </nav>
  )
}

export default Nav