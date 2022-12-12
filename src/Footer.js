import React from "react";
import "./Footer.css";
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
            
                <div className="item2">
                  <p> Designed & Developed by: </p>
                </div>
                <container> 
                <div className="item2">
                  <p>Hamza Ali</p>
                  <a
                    href="https://github.com/shamzaali7"
                    target="_blank"
                    className="item1">
                    <BsGithub/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/hamza-ali7/"
                    target="_blank"
                    className="item1">
                    < AiOutlineLinkedin/></a>
                </div>
                </container>
                <container>
                <div className="item2">
                  <p>Casey Dragon</p>
                  <a
                    href="https://github.com/CaseyDragon"
                    target="_blank"
                    className="item1">
                    <BsGithub/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/caseydragon/"
                    target="_blank"
                    className="item1">
                    < AiOutlineLinkedin/></a>
                </div>
                </container>
                <container>
                <div className="item2">
                  <p>Brittany Davis</p>
                  <a
                    href="https://github.com/bd6981"
                    target="_blank"
                    className="item1">
                    <BsGithub/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/brittany~davis/"
                    target="_blank"
                    className="item1">
                    < AiOutlineLinkedin/></a>
                </div>
                </container>
                
            </div>
        </footer>
    );
};
export default Footer;