import React from 'react'
import {Link} from 'react-router-dom'
import Intro from "./Intro"
import './App.css'

const Header = () => {
  return (
    <div className="Header">
        <header>
            <h1>Our Connections</h1>
            <Link path ="./Intro" element= {<Intro />}>button</Link>
        </header>
    </div>
  )
}

export default Header
