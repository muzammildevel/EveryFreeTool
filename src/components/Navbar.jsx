import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 60) {
      setShowNavbar(false); // Hide when scrolling down
    } else {
      setShowNavbar(true); // Show when scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`navbar ${!showNavbar ? "hidden" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          EveryFreeTool<span>.com</span>
        </Link>

        <nav className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/tools/audio">Audio Tools</Link>
          <Link to="/tools/image">Image Tools</Link>
          <Link to="/tools/document">Document Tools</Link>
          <Link to="/tools/text">Text Tools</Link>
          <Link to="/tools/video">Video Tools</Link>
          <Link to="/tools/finance">Finance Tools</Link>
          <Link to="/tools/web">Web Tools</Link>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
