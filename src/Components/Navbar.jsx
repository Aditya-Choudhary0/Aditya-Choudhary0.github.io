
import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id="nav-menu" className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="logo">
        <span style={{ color: '#ee9ca7' }}>A</span>
        <span style={{ color: '#ffbdd1' }}>D</span>
        <span style={{ color: '#ffd8a6' }}>I</span>
        <span style={{ color: '#ffe4b4' }}>T</span>
        <span style={{ color: '#ffdde1' }}>Y</span>
        <span style={{ color: '#ffdde1' }}>A</span>
      </a>
      <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="menu-item">
          <a href="#home" className="nav-link home">
            <span style={{ color: '#ee9ca7' }}>H</span>
            <span style={{ color: '#ffcdb7' }}>o</span>
            <span style={{ color: '#ffe4b4' }}>m</span>
            <span style={{ color: '#ffdde1' }}>e</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#about" className="nav-link about">
            <span style={{ color: '#ffbdd1' }}>A</span>
            <span style={{ color: '#ffd8a6' }}>b</span>
            <span style={{ color: '#ffe4b4' }}>o</span>
            <span style={{ color: '#ffdde1' }}>u</span>
            <span style={{ color: '#ffdde1' }}>t</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#skills" className="nav-link skills">
            <span style={{ color: '#ee9ca7' }}>S</span>
            <span style={{ color: '#ffbdd1' }}>k</span>
            <span style={{ color: '#ffd8a6' }}>i</span>
            <span style={{ color: '#ffe4b4' }}>l</span>
            <span style={{ color: '#ffdde1' }}>l</span>
            <span style={{ color: '#ffdde1' }}>s</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#projects" className="nav-link projects">
            <span style={{ color: '#ee9ca7' }}>P</span>
            <span style={{ color: '#ffbdd1' }}>r</span>
            <span style={{ color: '#ffcdb7' }}>o</span>
            <span style={{ color: '#ffd8a6' }}>j</span>
            <span style={{ color: '#ffe4b4' }}>e</span>
            <span style={{ color: '#ffdde1' }}>c</span>
            <span style={{ color: '#ffdde1' }}>t</span>
            <span style={{ color: '#ffdde1' }}>s</span>
          </a>
        </li>
        <li className="menu-item">
          <a href="#contact" className="nav-link contact">
            <span style={{ color: '#ee9ca7' }}>C</span>
            <span style={{ color: '#ffbdd1' }}>o</span>
            <span style={{ color: '#ffd8a6' }}>n</span>
            <span style={{ color: '#ffe4b4' }}>t</span>
            <span style={{ color: '#ffdde1' }}>a</span>
            <span style={{ color: '#ffdde1' }}>c</span>
            <span style={{ color: '#ffdde1' }}>t</span>
          </a>
        </li>
        <li className="menu-item">
          <a
            href="https://drive.google.com/file/d/1haJSVLwQoB_EeEJjG-fO1fWaMmoTc3lP/view?usp=sharing"
            rel="noreferrer"
            className="nav-link resume"
            id="resume-link-1"
            download
          >
            <button id="resume-button-1">
              <i class= "fa fa-download"  id='download'></i>
              <span style={{ color: '#ee9ca7' }}>R</span>
              <span style={{ color: '#ffbdd1' }}>e</span>
              <span style={{ color: '#ffd8a6' }}>s</span>
              <span style={{ color: '#ffe4b4' }}>u</span>
              <span style={{ color: '#ffdde1' }}>m</span>
              <span style={{ color: '#ffdde1' }}>e</span>
            </button>
          </a>
        </li>
      </ul>
    </div>
    
  );
};

export default Navbar;
