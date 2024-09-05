import { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css'; // Import the separate CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-container">
      <h1 className="navbar-logo">PORTFOLIO</h1>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="home" smooth={true} duration={500} className="navbar-link" activeClass="active">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="navbar-link" activeClass="active">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="navbar-link" activeClass="active">
          Projects
        </Link>
        <Link to="skills" smooth={true} duration={500} className="navbar-link" activeClass="active">
          Skills
        </Link>
        <Link to="experience" smooth={true} duration={500} className="navbar-link" activeClass="active">
          Experience
        </Link>
        <Link to="contact" smooth={true} duration={500} className="navbar-link" activeClass="active">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
