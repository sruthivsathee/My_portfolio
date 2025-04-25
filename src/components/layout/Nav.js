import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import "./../../styles/nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for tracking menu open or closed

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>SRUTHI</h1>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}{" "}
        {/* Display 'X' when menu is open, else 'hamburger' */}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
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
