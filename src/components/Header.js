import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './../assets/logo_text.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = useCallback((event) => {
    if (menuOpen && !event.target.closest('.slider-menu') && !event.target.closest('.hamburger')) {
      setMenuOpen(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><a href="/">Layanan</a></li>
          <li><a href="/">Berita</a></li>
          <li><a href="#kontak">Kontak</a></li>
          <li><Link to="/register" className="outline">Daftar</Link></li>
          <li><Link to="/login" className="outline">Login</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`slider-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links-2">
          <li><Link to="/" className="active">Home</Link></li>
          <li><a href="/#layanan">Layanan</a></li>
          <li><a href="/#berita">Berita</a></li>
          <li><a href="#kontak">Kontak</a></li>
          <li><Link to="/register" className="outline">Daftar</Link></li>
          <li><Link to="/login" className="outline">Login</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
