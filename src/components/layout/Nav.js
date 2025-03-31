import React from "react";
import "./../../styles/nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="heading">SRUTHI V S</h1>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
