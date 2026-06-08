import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <span className="logo-icon">🔥</span>
          <span>El <span className="logo-highlight">Fuego</span></span>
        </a>

        <button
          className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" className="navbar-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#menu" className="navbar-link" onClick={(e) => handleNavClick(e, 'menu')}>Menu</a>
          <a href="#reservation" className="navbar-link" onClick={(e) => handleNavClick(e, 'reservation')}>Reservations</a>
          <a href="#contact" className="navbar-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          <a
            href="#reservation"
            className="btn-primary navbar-cta"
            onClick={(e) => handleNavClick(e, 'reservation')}
            id="nav-book-table"
          >
            Book a Table
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
