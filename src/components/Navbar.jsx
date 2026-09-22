import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Giflin Godshia</div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#design" className="nav-link" onClick={() => setIsMenuOpen(false)}>Design</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#achievements" className="nav-link" onClick={() => setIsMenuOpen(false)}>Achievements</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;