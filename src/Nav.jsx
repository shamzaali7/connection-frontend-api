import React from 'react'
import "./Nav.css"
import {useState} from 'react'
import { FcAbout } from 'react-icons/fc';
import { FcHome } from 'react-icons/fc';
import Intro from './Intro'



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="main" onClick= {() => setActiveNav('main')} className={activeNav === "main" ? 'active' : ''}><FcHome size={35}/></a>
      <a href="Intro" onClick= {() => setActiveNav('Intro')} className={activeNav === '/Intro' ? 'Intro' : ''}><FcAbout size={35}/></a>
      
      
      
    </nav>
  )
}

export default Nav