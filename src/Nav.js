import React from "react";
import "./Nav.css";
import { useState } from "react";
import { FcAbout } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import Intro from "./Intro";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./Firebase-Config/AuthContext";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { user } = UserAuth();

  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  if (!user) {
    return null; // or return a message to prompt the user to log in
  }

  return (
    <nav>
      <a
        href="/main"
        onClick={() => handleNavClick("main")}
        className={activeNav === "main" ? "active" : ""}>
        <FcHome size={35} />
      </a>
      <a
        href="/Intro"
        onClick={() => handleNavClick("Intro")}
        className={activeNav === "Intro" ? "active" : ""}>
        <FcAbout size={35} />
      </a>
    </nav>
  );
};

export default Nav;

