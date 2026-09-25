import { useState } from "react";
import logoLight from "../../assets/logolight.png";
import logoDark from "../../assets/logodark.png";
import "./Navbar.css";

function Navbar({ onToggleTheme, dark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#" className="logo" onClick={closeMenu}>
          <img src={dark ? logoDark : logoLight} alt="Logo" />
        </a>

        <nav className="nav-links">
          <a href="#about">About Me</a>
          <a href="#projects">Portfolio</a>
          <a href="#skills">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Book A Call ↗
        </a>

        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {dark ? "☀" : "☾"}
        </button>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About Me</a>
        <a href="#projects" onClick={closeMenu}>Portfolio</a>
        <a href="#skills" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Blog</a>
        <a href="#contact" className="mobile-menu-button" onClick={closeMenu}>Book A Call ↗</a>
      </nav>
    </header>
  );
}

export default Navbar;
